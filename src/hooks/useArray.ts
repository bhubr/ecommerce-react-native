
// function useArray<T>(initialArr: Array<T>) {
//   const [arr, setArr] = useState<Array<T>>(initialArr);

//   function appendItem(item: T) {
//     setArr([...arr, item]);
//   }

//   function removeAtIndex(i: number) {
//     setArr(arr.filter((item, index) => index !== i))
//   }

//   return {
//     array: arr,
//     add: appendItem,
//     rmAtIndex: removeAtIndex,
//   };
// }