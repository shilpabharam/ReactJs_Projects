
import { useState } from "react";
export default function FileStructure() {
  const data = [
    {
      id: 1,
      name: 'README.md',
    },
    {
      id: 2,
      name: 'Documents',
      children: [
        {
          id: 3,
          name: 'Word.doc',
        },
        {
          id: 4,
          name: 'Powerpoint.ppt',
        },
      ],
    },
    {
      id: 5,
      name: 'Downloads',
      children: [
        {
          id: 6,
          name: 'unnamed.txt',
        },
        {
          id: 7,
          name: 'Misc',
          children: [
            {
              id: 8,
              name: 'foo.txt',
            },
            {
              id: 9,
              name: 'bar.txt',
            },
          ],
        },
      ],
    },
  ];

  return <FileExplorer data={data} />;
}


function FileExplorer({ data }) {
  return (
    <div>
      {data.map((item) => (
        <FolderItem item={item}></FolderItem>
      ))}
    </div>
  );
}

function FolderItem({ item }) {
  const [isOpen, setIsopen] = useState(false);
  let hasChildren = item.children && item.children.length > 0;

  return (
    <>
      <div>
        <div onClick={() => hasChildren && setIsopen(!isOpen)}>
          {item.name} <span>{item.children ? "+" : "-"}</span>
        </div>
      </div>

      {isOpen &&
        hasChildren &&
        item.children.map((child) => (
          <FolderItem key={child.id} item={child}></FolderItem>
        ))}
    </>
  );
}
