"use client"

import * as React from "react"
import { Plus, Check, Trash2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Task = {
  id: string
  text: string
  category: string
  completed: boolean
}

const categories = ["Work", "Personal", "Shopping", "Health"]

export function TasksWidget() {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [newTask, setNewTask] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0])

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          text: newTask.trim(),
          category: selectedCategory,
          completed: false,
        },
      ])
      setNewTask("")
    }
  }

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = []
    }
    acc[task.category].push(task)
    return acc
  }, {} as Record<string, Task[]>)

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTask()}
          />
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={addTask}>
            <Plus className="mr-2 h-4 w-4" /> Add
          </Button>
        </div>
        <div className="space-y-4">
          {Object.entries(groupedTasks).map(([category, categoryTasks]) => (
            <div key={category}>
              <h3 className="font-semibold mb-2">{category}</h3>
              <ul className="space-y-2">
                {categoryTasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex items-center justify-between bg-secondary p-2 rounded-md"
                  >
                    <span className={task.completed ? "line-through" : ""}>
                      {task.text}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{task.category}</Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleTaskCompletion(task.id)}
                      >
                        <Check
                          className={`h-4 w-4 ${task.completed ? "text-green-500" : "text-gray-300"
                            }`}
                        />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteTask(task.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

