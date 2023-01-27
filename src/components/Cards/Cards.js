import './styled.css'



export function CardClasses() {
    return(
        <>
                  <div className='sub'>
                    <strong> Benefícios :</strong>
                    </div>




        <div className="Cards">
            <div className="icon">
            <img src="../images/locker_room.svg" alt="armários"></img>
            <p> Guarda volume</p>
            </div>
            <div className="icon">
            <img src="../images/pool.svg" alt="Piscina"></img>
            <p> Piscina </p>
            </div>
            <div className="icon">
            <img src="../images/shower.svg" alt="Chuveiros"></img>
            <p> Chuveiros</p>
            </div>
            <div className="icon">
            <img src="../images/wifi.svg" alt="Wi-fi"></img>
            <p>Wi-fi</p>
            </div>
        </div>
        <div className='unidades'>
                    <strong>Unidades</strong>
                    </div>
                    <div class="card">
                    <div class="card-header">
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Bangu- RJ </p>
                                    <p class="card-text">Madureira- RJ</p>
                                    <p class="card-text">Campo Grande- RJ</p>
                                </div>
                                </div>
        
                            <div class="card">
                                    <div className="clock">
                                            <img src="../images/clock.png" alt="Piscina"></img>
                                            <strong>Horários</strong>
                                    </div>
                                <div class="card-header">
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Segunda a Sexta 5:30 as 23:00 </p>
                                    <p class="card-text">Sábado 7:00  as 18:00 </p>
                                    <p class="card-text">Domingo  8:00 as  14:00</p>
                                </div>
                            </div>
        </>
    )
}
