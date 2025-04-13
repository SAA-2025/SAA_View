import Title from '../../components/others/Title'
import EmployeeCarousel from './EmployeeCarousel'

const EmployeeSection = () => {
  return (
    <section id='our-team'>
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-12">
                    <Title title=' - ჩვენი გუნდი' hrDisplay={!false} className='text-center'/>
                    <EmployeeCarousel/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EmployeeSection