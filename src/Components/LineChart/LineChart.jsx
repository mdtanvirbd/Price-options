import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
  const studentMarks = [
    { id: 1, name: "Alice", physics: 85, chemistry: 78, math: 92 },
    { id: 2, name: "Bob", physics: 75, chemistry: 82, math: 85 },
    { id: 3, name: "Charlie", physics: 92, chemistry: 88, math: 95 },
    { id: 4, name: "David", physics: 68, chemistry: 72, math: 70 },
    { id: 5, name: "Emma", physics: 80, chemistry: 85, math: 88 },
    { id: 6, name: "Frank", physics: 77, chemistry: 79, math: 84 },
    { id: 7, name: "Grace", physics: 95, chemistry: 91, math: 97 },
    { id: 8, name: "Henry", physics: 82, chemistry: 76, math: 81 },
    { id: 9, name: "Isla", physics: 70, chemistry: 74, math: 69 },
    { id: 10, name: "Jack", physics: 88, chemistry: 90, math: 93 },
  ];

  return (
    <div>
      <LChart width={700} height={400} data={studentMarks}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="math" stroke="blue" />
        <Line dataKey="physics" stroke="red" />
      </LChart>
    </div>
  );
};

export default LineChart;
