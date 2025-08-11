import Title from '../../components/others/Title'
import ResponsiveCarousel from '../../components/carousels/ResponsiveCarousel'
import employees from '../../data/employees'
import EmployeeCard from '../../components/cards/EmployeeCard'

const EmployeeSection = () => {
  return (
    <section id='our-team'>
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <Title title='ჩვენი - გუნდი' hrDisplay={!false} className='text-center'/>
                    <ResponsiveCarousel
                      settings={{dots: true}}
                      slidesToShow={{large: 5, medium: 3, small: 1}}
                    >
                      {employees.map((employee) => (
                        <EmployeeCard employee={employee}/>
                      ))}
                    </ResponsiveCarousel>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EmployeeSection