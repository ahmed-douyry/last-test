const initialState = [
    {id:1,nom:'douyry',prenom:'ahmed' ,email:'ahmed.douyry@gmail.com',sexe:'masculin'},
    
    {id:2,nom:'douyry',prenom:'youssef' ,email:'youssef.douyry@gmail.com',sexe:'masculin'},
    {id:3,nom:'sarouti',prenom:'Najwa' ,email:'Najwa_sarouti@gmail.com',sexe:'feminin'},
]


export const reducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case 'add':
    return [...state,payload ]
case 'edit':
    const etud = state.find(e=>e.id == payload.id)
    etud.nom = payload.nom
    etud.prenom = payload.prenom
    etud.email = payload.email
    etud.sexe = payload.sexe
    return [...state]
case 'delete':
    return state.filter(s=>s.id!=payload)

  default:
    return state
  }
}
