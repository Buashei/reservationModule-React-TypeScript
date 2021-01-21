export type selectServiceProps = {
  data: { id: number; icon: string; title: string; amount: number }[];
  onClose: () => void;
  type: string;
  setFormData: (data: { title: string }) => void;
  formData: Record<string, string | number>;
};
