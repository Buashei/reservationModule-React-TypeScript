export type contentSelectServiceProps = {
  onClose: () => void;
  data: { id: number; icon: string; title: string; amount: number }[];
  setFormData: (data: { title: string }) => void;
  formData: Record<string, string | number>;
};
