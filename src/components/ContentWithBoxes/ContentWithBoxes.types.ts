export type contentSelectServiceProps = {
  onClose: () => void;
  data: {
    id: number;
    icon: string;
    title: string;
    amount: number;
    services: { id: number; icon: string; title: string; description: string; price: number }[];
  }[];
  setFormData: (data: { title: string }) => void;
  formData: Record<string, string | number>;
};
