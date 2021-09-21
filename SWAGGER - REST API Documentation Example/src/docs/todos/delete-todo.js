module.exports = {
    delete:{
        tags: ['Todo CRUD operations'],
        description: "Deleting a todo",
        operationId: "deleteTodo",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "Deleting a done todo"
            }
        ],
        responses:{
            '200':{
                description:"Todo deleted successfully"
            },
            '404':{
                description:"Todo not found"
            },
            '500':{
                description:"Server error"
            }
        }
    }
}