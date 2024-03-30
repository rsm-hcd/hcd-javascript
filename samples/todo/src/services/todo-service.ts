import { ServiceFactory } from "@rsm-hcd/javascript-react";
import { TodoRecord } from "../models/todo";

export const TodoService = {
    list: ServiceFactory.list(TodoRecord, "api/todos"),
    create: ServiceFactory.create(TodoRecord, "api/todos"),
    update: ServiceFactory.update(TodoRecord, "api/todos/:id"),
    get: ServiceFactory.get(TodoRecord, "api/todos/:id"),
    delete: ServiceFactory.delete("api/todos/:id"),
};
