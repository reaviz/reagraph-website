declare const metadata: Array<{
  displayName: string;
  props: {
    [key: string]: {
      description: string;
      required: boolean;
      type: { name: string };
      defaultValue?: { value: string };
    };
  };
}>;

export default metadata; 