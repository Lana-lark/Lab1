interface Entity {
    id: number;
  }
  
  interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
  }
  
  const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
  };
  export { data }; // Экспортируем data