import { useDemo } from "../../hooks/loaders";

export function DumiPage(props) {
  return props.children;
}

export function DumiDemo(props) {
  const id = props.demo.id;

  const dd = useDemo(id);

  // const CodeBlocker = 
  // console.log("🚀 #### ~ DumiDemo ~ dd", dd);

  return "NULL";
}

export function DumiDemoGrid(props) {
  return "NULL";
}

export function Link(props) {
  return "LINK";
}
