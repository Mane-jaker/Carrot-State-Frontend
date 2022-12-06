import '../styles/stylespage/Acss.css'
import Button from '../continuous/Button'

const srcHouse = 'https://www.bing.com/th?id=ORMS.1080f9d81f2a51f3a5f9a443e2e1695c&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=0.9375&p=0'
const sellerAgent = 'Joakin Perez'
const contact = '961 857 9598'
const price = '$150,000'
const description = 'Case en san uanito cruz en esquina pedro madero y avenida las aguilas frente a el mayeguito y av 15 pte'
const bathrooms = '2'
const rooms = '2'
const size = '5'
const typ = ''
const clas = 'btn btcard tam'

function PopupInmovil() {
    return (
        <div className="container-fluid fondo-deg ">
            <div className="row elpop h100">
                <div className="col-7 h10p aligcontcen">
                    <div className="row w100">
                        <img className="img-fluid" src={srcHouse} alt="ola" />{/*no ta componiendo la imagen */}
                    </div>
                </div>
                <div className="col-5 info">
                    <div className="row cardsitas aligcen dirow">
                        <div className="col-9 dircol aligcen justcen">
                            <p><h4>{description}</h4></p>
                            <p><h2>{price}</h2></p>
                        </div>
                        <section className="col-3 dircol aligcen justcen">
                            <div className="dircol aligcen justcen">
                                <img className='imgsize' src="https://s3-alpha-sig.figma.com/img/0b1c/b3ae/30d5d69ed143dc5e100d6d97335ea826?Expires=1671408000&Signature=MJyxYoFonTMbdrDHcnFHEBmC4aRNqsk2onHf10hDSaoD4k1mPgE1h4VCoWHspaFvZKyklHjPjDIorYpaFUHBlUC8~9kOKMBx19SBHBDOYCQTao1ImfjVHDc3pnLSNzG~ZWrLD~e09lzQGaJHudGxqoFjHpEy~A12opRhHyacxBTuDdmInZuOd9gXrU9q1zAK8jIsflpfqq~bKCE60Zm9NCBRacfvCvZWSaaRCINY4qNHUV4MC5DZxYBsCpDR5P-QmnLeXDgLDCaqiwGxSWleUcuF-msvILYIMD7E7r3yqZozsKVriIEOa9ClbGmfiJdpQDjuchQ0d30OD1GskXt0sA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="ola" />
                                <p><h5>Cuartos: {rooms}</h5></p>
                            </div>
                            <div className="dircol aligcen justcen">
                                <img className='imgsize' src="https://s3-alpha-sig.figma.com/img/40f7/8445/11f19421aab600c41a4504ab755012bc?Expires=1671408000&Signature=PwxznbgwQ1-7i1pV99yqXpR~epUFHNa5Zn2PFAFIuEOnnyeK-hsVIiEI70JNEGjZlLTz-D4M3e3QFqNnh6Y8eeaXtxwMagR8PvIKeW5OczBfTM5NrZsXcmXrI7Mks1wjmp4WVuu75LoLlx4enOh1uL6YCvlEV1vQS~FrkWvqb95P5SUjS8Bp671QhgGpMSU~UpAqhr3ko6xIEVOqEQ1xdzI2VylCrdGDLyUSqF0p4uroCseMo3y3BsqectYOFTFfV7dqxW8ojyt8hGUamaiftTbFeXeGjcc8oT~AL9cu5erKOVCalnlssszANIzr7RYNVjEqqkOtLb~h0nGj7FLc5A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="ola" />
                                <p><h5>Baños: {bathrooms}</h5></p>
                            </div>
                            <div className="dircol aligcen justcen dirow">
                                <img className='imgsize' src="https://s3-alpha-sig.figma.com/img/1a06/60fc/6af8fb00217e5c942325880df58bb26d?Expires=1671408000&Signature=hg2iEd7RjUrxZyQyp0duMOr1VedZ2Wo40BKUjVfsysgkfvrQ0xX2zLhHcJotTBxyxY1RLFF7uaZqHJBlM1tvFov8f1Axc59dNwUQa4Epovs37RIijnM43-WsMVng00H6LwAmtX7uPpSxYz6yyJi8Qi9rfTJ70xsI4MBRoLbTaNzkP37LcOKrJ9rJxQj3YpLsKv3A9ztoFnnk0B82aIxIXqzorsP4JUDthZ7SyzFAjVuBjLXV50TkFpMj0cUm3X-h1MAVD2hpX-V4F4JqZ1QzE9HuU4TAnnrrBBHUp4BtNSbuMGgobCILpIh7Sg0iYQjWfoIDpC2TsflJ24di14WZ0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="ola" />
                                <p><h5>Tamaño: {size}m2</h5></p>
                            </div>
                        </section>
                    </div>
                    <div className="row mt cardsitas">
                        <div className="col-12 dircol aligcen justcen dirow">
                            <p><h4>Vendida por: {sellerAgent}</h4></p>
                            <p><h4>Numero: {contact}</h4></p>
                            <div className="row">
                                <div className="col-6">
                                    <Button Texto="Comprar" typ={typ} clas={clas}/>
                                </div>
                                <div className="col-6">
                                    <Button Texto="Me Gusta" typ={typ} clas={clas}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupInmovil;