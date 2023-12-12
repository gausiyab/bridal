export default {
    name: 'payout',
    type: 'document',
    title: 'payout icon',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of Product',
        validation: (Rule:any) => Rule.required().min(10).max(80).warning("Shorter Above 80")
      },
      {
        name: 'image',
        type: 'image',
        title: 'image title', 
      },
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      },
    
      
      
    ],
  }
  