import { ReactText } from 'react';

export interface ServiceBoxGeneratorProps {
  setFormData: (data: { title: string }) => void;
  formData: Record<string, string | number>;
}
