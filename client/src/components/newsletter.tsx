import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { insertNewsletterSchema, type InsertNewsletter } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Newsletter() {
  const { toast } = useToast();
  
  const form = useForm<InsertNewsletter>({
    resolver: zodResolver(insertNewsletterSchema),
    defaultValues: {
      email: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      await apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "You've been subscribed to our newsletter.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    }
  });

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter for the latest course updates, tech news, and special offers.
        </p>

        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(data => mutation.mutate(data))}
            className="flex gap-4 max-w-md mx-auto"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" disabled={mutation.isPending}>
              Subscribe
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
