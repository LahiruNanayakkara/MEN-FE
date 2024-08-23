export interface ShippingtDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    apartment?: string;
    city: string;
    province: string;
    postalCode: string;
  };
}
