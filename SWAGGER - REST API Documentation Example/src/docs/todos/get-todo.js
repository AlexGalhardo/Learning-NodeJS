module.exports = {
    get:{
        tags:['Todo CRUD operations'],
        description: "Get a todo",
        operationId: "getTodo",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "A single todo id"
            }
        ],
        responses:{
            '200':{
                description:"Todo is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Todo"
                        }
                    }
                }
            },
            '404':{
                description: "Todo is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"We can't find the todo",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}