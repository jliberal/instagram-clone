interface contextualCard {
  id: number;
  name: string;
  username: string;
  avatar: string;
  email: string;
  dob: Date;
  phone: string;
  address: Faker.Address;
  website: string;
  company: Faker.Company;
}

export default contextualCard;