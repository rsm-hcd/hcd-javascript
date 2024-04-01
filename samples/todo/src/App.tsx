import {
    useListService,
    useCreateService,
    useUpdateService,
    useDeleteService,
} from "@rsm-hcd/javascript-react";
import { TodoService } from "./services/todo-service";
import { TodoRecord } from "./models/todo";
import { useRef } from "react";
import { useFormSubmissionHandler } from "./hooks/use-form-submission-handler";
import { useResultsMerge } from "./hooks/use-results-merge";

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const { refresh, results } = useListService(TodoService.list);
    const { create, created } = useCreateService(TodoService.create);
    const { update, updated } = useUpdateService(TodoService.update);
    const { delete: remove, deleted } = useDeleteService(TodoService.delete);

    const fullResults = useResultsMerge(results, created, updated, deleted);

    const handleToggleTodoCompletion = (record: TodoRecord) => () =>
        update(record.with({ completed: !record.completed }));

    const handleRemoveTodo = (record: TodoRecord) => () => remove(record.id);

    const handleFormSubmission = useFormSubmissionHandler(({ description }) => {
        create(new TodoRecord({ description }));

        if (!inputRef.current) {
            return;
        }

        inputRef.current.value = "";
        inputRef.current.focus();
    });

    return (
        <div className="flex flex-col h-full">
            <div className="flex-grow-0 flex-shrink-0 bg-slate-800 text-gray-50">
                <div className="container flex flex-row items-center justify-between py-4 mx-auto">
                    <h1 className="pb-2 text-6xl font-bold">Todos</h1>
                    <button
                        type="button"
                        onClick={refresh}
                        className="px-4 py-2 border border-black rounded-md bg-slate-100 text-slate-950">
                        Refresh
                    </button>
                </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 bg-gray-200 border-b text-slate-800 border-b-slate-600">
                <div className="container flex flex-row items-center justify-between py-1 mx-auto text-xs font-semibold">
                    {new Date().toLocaleString()}
                </div>
            </div>
            <div className="container flex-grow mx-auto mt-4">
                <form
                    className="flex flex-row gap-2"
                    onSubmit={handleFormSubmission}>
                    <input
                        ref={inputRef}
                        className="flex-grow px-4 py-2 border border-black rounded-md"
                        type="text"
                        name="description"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 border border-black rounded-md bg-slate-100">
                        +
                    </button>
                </form>

                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    ID
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Description
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Completed
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {fullResults.map((todo) => (
                            <tr
                                key={todo.id}
                                className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                        {todo.id}
                                    </p>
                                </td>
                                <td>
                                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                        {todo.description}
                                    </p>
                                </td>
                                <td>
                                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                        {todo.completed ? "Yes" : "No"}
                                    </p>
                                </td>
                                <td>
                                    <div className="flex flex-row gap-2">
                                        <button
                                            onClick={handleToggleTodoCompletion(
                                                todo
                                            )}
                                            className="inline-block px-2 font-sans text-sm antialiased font-medium leading-normal border rounded hover:bg-slate-200 border-slate-600 text-blue-gray-900">
                                            {todo.completed
                                                ? "Reopen"
                                                : "Complete"}
                                        </button>
                                        <button
                                            onClick={handleRemoveTodo(todo)}
                                            className="inline-block px-2 font-sans text-sm antialiased font-medium leading-normal border rounded hover:bg-slate-200 border-slate-600 text-blue-gray-900">
                                            Remove
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
