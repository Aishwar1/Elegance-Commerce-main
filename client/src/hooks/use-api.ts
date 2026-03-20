import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl, type ProductResponse, type ProductsListResponse, type OrderInput, type OrderResponse } from "@shared/routes";

// Utility to fetch and parse with Zod
async function fetchAndParse<T>(url: string, schema: any, options?: RequestInit): Promise<T> {
  const res = await fetch(url, { ...options, credentials: "include" });
  if (!res.ok) {
    let errorMessage = "An error occurred";
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorMessage;
    } catch (e) {
      // Ignore JSON parse error on error response
    }
    throw new Error(errorMessage);
  }
  const data = await res.json();
  const parsed = schema.safeParse(data);
  
  if (!parsed.success) {
    console.error("Zod validation failed:", parsed.error.format());
    throw new Error("Invalid data received from server");
  }
  
  return parsed.data;
}

export function useProducts() {
  return useQuery({
    queryKey: [api.products.list.path],
    queryFn: () => fetchAndParse<ProductsListResponse>(
      api.products.list.path, 
      api.products.list.responses[200]
    ),
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: [api.products.get.path, id],
    queryFn: () => {
      const url = buildUrl(api.products.get.path, { id });
      return fetchAndParse<ProductResponse>(
        url, 
        api.products.get.responses[200]
      );
    },
    enabled: !!id,
  });
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: OrderInput) => {
      const validated = api.orders.create.input.parse(data);
      const res = await fetch(api.orders.create.path, {
        method: api.orders.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });
      
      if (!res.ok) {
        let errorMessage = "Failed to create order";
        try {
          const errorData = await res.json();
          errorMessage = errorData.message || errorMessage;
        } catch(e) {}
        throw new Error(errorMessage);
      }
      
      const responseData = await res.json();
      return api.orders.create.responses[201].parse(responseData);
    },
    onSuccess: () => {
      // Could invalidate order history here if we had one
    }
  });
}
