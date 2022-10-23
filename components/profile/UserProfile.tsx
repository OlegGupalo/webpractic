import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { UpadateUserSchema } from 'utils/shemas/updateUserValidation'
import axios from 'axios'
import { PostApi } from 'utils/api/post'
import { useDispatch, useSelector } from 'react-redux'
import { Shedule } from './Shedule'
import { fetchOriginalShedule, fetchShedule } from 'redux/slices/shedule'

interface UserProps {
    list: any[],
    schedule: null
    _id: string
    login: string
    faculty: string
    department: string
    group: string
    name: string
    surname: string
}

export const UserProfile: React.FC<UserProps> = ({
}) => {
    const dispatch = useDispatch()
    const [formError, setFormError] = useState(null)
    const shedule = useSelector(state => state.shedule)
    const {error, status, user} = useSelector(state => state.auth)
    
    // const [name, setName] = useState(user.data.name)
    // const [surname, setSurname] = useState(user.data.surnname)
    // const [login, setLogin] = useState(user.data.login)
    // const [role, setRole] = useState(user.data.role)
    // const [name, setName] = useState(user.data.name)

    
    const {register, handleSubmit, formState: { errors, isValid }} = useForm({
        mode: 'onChange',
        resolver: yupResolver(UpadateUserSchema)
    })
    let id = '6353fc60cbf1c602d8252bf5'
    useEffect(() => {
        dispatch(fetchOriginalShedule(id))
    }, [dispatch])

    return (
        <>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <div className='col-md-6'>
                                <h3>Профиль</h3>
                                <p>Редактирование профиля</p>
                            </div>
                            
                            <form className="requires-validation">

                                <div className="col-md-12">
                                    <input 
                                        // value={name}
                                        // onChange={e => setName(e.target.value)}
                                        className="form-control" 
                                        type="text" 
                                        name="name" 
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div className="col-md-12">
                                    <input 
                                        // value={surname}
                                        // onChange={e => setSurname(e.target.value)}

                                        className="form-control" 
                                        type="text" 
                                        name="surname" 
                                        placeholder="Surname"
                                    />
                                </div>

                                <div className="col-md-12">
                                    <input 
                                        // value={login}
                                        // onChange={e => setLogin(e.target.value)}
                                        className="form-control" 
                                        type="email" 
                                        name="login" 
                                        placeholder="E-mail Address"

                                    />
                                </div>
                                <div className="col-md-12">
                                <select 
                                    className="form-select mt-3" 
                                    {...register('role')} 
                                >
                                    <option selected disabled value="">Студент</option>
                                    <option value="jweb">Преподаватель</option>
                                    <option value="sweb">Сотрудник</option>
                                </select>
                                <select className="form-select mt-3" 
                                // value={role} onChange={e => setRole(e.target.value)}
                                 >
                                    <option selected disabled>FIT</option>
                                    <option value="student">Преподаватель</option>
                                    <option value="teacher">Сотрудник</option>
                                </select>
                                <select className="form-select mt-3" {...register('group')} >
                                    <option selected disabled value="">VPR</option>
                                    <option value="jweb">Преподаватель</option>
                                    <option value="sweb">Сотрудник</option>
                                </select>
                            </div>
                                <div className="form-button mt-3">
                                    <button id="submit" type="submit" className="btn btn-warning">Сохранить</button>
                                </div>
                            
                            </form>
                            <Shedule
                                shedule={shedule.shedule}
                            />
                        </div>
                    </div>

                    </div>
        
                </div>
            </div>
        </>
    )
}