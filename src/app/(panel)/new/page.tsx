import { useCreateClient } from "@/src/hooks/useCreateClient";
import NewClient from "@/src/screens/newClient";

export default function New() {

  const { control, createClient, errors, handleSubmit, isSubmitting } = useCreateClient()

  return (
    <NewClient 
    control={control}
    createClient={createClient}
    errors={errors}
    handleSubmit={handleSubmit}
    isSubmitting={isSubmitting}
    />
  );
}