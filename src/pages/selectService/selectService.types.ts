export type selectServiceProps = {
  onClose: () => void;
  type: string;
  setFormData: (data: { title: string }) => void;
  formData: Record<string, string | number>;
};
