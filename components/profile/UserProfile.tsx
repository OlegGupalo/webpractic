import { Typography } from '@mui/material'
import React, { useState } from 'react'

interface UserProps {
    username: string
    email: string
    role: string
}



export const UserProfile: React.FC<UserProps> = ({username, email, role}) => {
    const [name, setName] = useState(username)
    const [eml, setEml] = useState(email)
    const [rol, setRol] = useState(role)


    return (
        <React.Fragment>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Профиль</h3>
                            <p>Редактирование профиля</p>
                            <form className="requires-validation">

                                <div className="col-md-12">
                                    <input 
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="form-control" 
                                        type="text" 
                                        name="name" 
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="email" name="email" placeholder="E-mail Address" />
                                </div>
                                <div className="col-md-12">
                                <select className="form-select mt-3" >
                                    <option selected disabled value="">Студент</option>
                                    <option value="jweb">Преподаватель</option>
                                    <option value="sweb">Сотрудник</option>
                                </select>
                            </div>
                                <div className="form-button mt-3">
                                    <button id="submit" type="submit" className="btn btn-warning">Сохранить</button>
                                </div>
                            
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}