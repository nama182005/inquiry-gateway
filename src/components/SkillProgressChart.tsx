
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Skill {
  id: string;
  name: string;
  level: number;
  description: string;
  courses: {
    name: string;
    provider: string;
    date: string;
    url: string;
  }[];
}

interface SkillProgressChartProps {
  skills: Skill[];
}

const SkillProgressChart: React.FC<SkillProgressChartProps> = ({ skills }) => {
  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Proficiency: ${context.raw}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Proficiency Level (%)',
          font: {
            size: 12,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  // Prepare the chart data
  const chartData = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Skill Proficiency',
        data: skills.map(skill => skill.level),
        backgroundColor: 'rgba(41, 128, 185, 0.7)',
        borderColor: 'rgba(41, 128, 185, 1)',
        borderWidth: 1,
        borderRadius: 5,
        hoverBackgroundColor: 'rgba(41, 128, 185, 0.9)',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 h-72">
      <h3 className="text-lg font-medium text-preskilet-charcoal mb-4">Skill Proficiency Overview</h3>
      <div className="h-56">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};

export default SkillProgressChart;
