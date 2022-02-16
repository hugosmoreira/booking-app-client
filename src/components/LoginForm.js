import React from 'react'

const LoginForm = ({handleSubmit, email, setEmail, password, setPassword}) => {
  return (
    <form onSubmit={handleSubmit} className='mt-3'>
      
      <div className='form-group  mb-3'>
        
        <label className='form-label'>Email Adress</label>
        <input type='email' className='form-control' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)}/>
        
      </div>
      <div className='form-group mb-3'>
        
        <label className='form-label' >Password</label>
        <input type='password' className='form-control' placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)}/>
        
      </div>
      <button disabled={!email || !password} type='submit' className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default LoginForm