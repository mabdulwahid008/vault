import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    setTimeout(() => {
      // localStorage.removeItem('token')
      // localStorage.removeItem('user')
      // window.location.reload()
    }, 1000)
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className='flex justify-center items-center gap-4 flex-col h-screen'>
   
        <h2 className='font-bold text-3xl text-themePink text-center'>{'Error Occurred'}</h2>
        <p className='text-base text-themeGrey-300 font-semibold text-center sm:w-[350px] w-[400px] -mt-2 '>{"Please check your internet or try again later"}</p>
      </div>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;