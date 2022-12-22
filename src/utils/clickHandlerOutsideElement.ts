export const handlerClickOutside = (event: any, refArray: any, callback: any) => {
  refArray.find((item:any) => item.current.contains(event.target)) || callback();
};
