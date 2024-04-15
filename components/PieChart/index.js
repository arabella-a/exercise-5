import { Pie } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions ] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 30, 14, 5, 12, 25],
                    borderColor: [
                        'rgba(255, 162, 235)', 
                        'rgba(53, 160, 235)',
                        'rgba(12, 100, 235)',
                        'rgba(64, 50, 235)',
                        'rgba(102, 85, 235)',
                        'rgba(200, 162, 235)'
                    ],
                    backgroundColor: [
                        'rgba(255, 162, 235, 0.4)', 
                        'rgba(53, 160, 235, 0.4)',
                        'rgba(12, 100, 235, 0.4)',
                        'rgba(64, 50, 235, 0.4)',
                        'rgba(102, 85, 235, 0.4)',
                        'rgba(200, 162, 235, 0.4)'
                    ],
                    borderWidth: 1
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
        <>
        <div>
        <Pie data={chartData} options={chartOptions}/>
        </div>
        </>
    )
}