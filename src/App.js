import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "123",
      label: "can i use React on a project?",
      content:
        "In the upper-right corner of any page, click , and then click Import repository. On the ",
    },
    {
      id: "345",
      label: "can i use React on a project?",
      content:
        "In the upper-right corner of any page, click , and then click Import repository. On the",
    },
    {
      id: "567",
      label: "can i use React on a project?",
      content:
        "In the upper-right corner of any page, click , and then click Import repository. On the",
    },
  ];
  return <Accordion items={items} />;
}
export default App;
