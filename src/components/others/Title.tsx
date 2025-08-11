interface TitleProps {
    title: string;
    className?: string;
    hrWidth?: number;
    hrDisplay?: boolean
    fontSize?: string;
}


const Title = ({title, className, hrWidth, hrDisplay, fontSize}: TitleProps) => {

  const regularTitle: string = title.split(' - ')[0]  
  const highlightTitle: string = title.split(' - ')[1]  

  return (
    <div className={"row mb-3 "+className}>
        <h2 className={`display-${fontSize || '4'} fw-bold mb-3`}>{regularTitle} <span className="text-accent">{highlightTitle}</span> </h2> 
        <hr className={`border-3 w-${(hrWidth || 75)} d-${hrDisplay ? 'none' : 'block'} mt-3`} style={{borderColor: '#bbb'}}/>
    </div>
  )
}

export default Title