import React from 'react'

const Loading = () => {
  return (
    <div className="text-center" style={{marginTop: '20%', marginBottom: '20%' }}>
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
      
    </div>
  )
}

export default Loading
