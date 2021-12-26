import {useCallback, useEffect, useState} from 'react'
import { useRouter } from "next/router"
import ItemTopUp from "../../components/molecules/ItemTopUp"
import Footer from "../../components/organisms/Footer"
import Navbar from "../../components/organisms/Navbar"
import TopUpForm from "../../components/organisms/TopUpForm"
import { getDetailVoucher, getFeaturedGames, getPayments } from '../../services/player'
import { GameItemTypes, NominalsTypes, PaymentTypes } from '../../services/data-types'
import { GetStaticPaths } from 'next'

interface DetailProps {
    dataItem: GameItemTypes;
    nominals: NominalsTypes[];
    payments: PaymentTypes[];
  }

const Detail = ({dataItem, nominals, payments}:DetailProps) => {

    useEffect(() => {
        localStorage.setItem('data-item', JSON.stringify(dataItem));
    }, []);

    return (
        <>
            <Navbar/>
                <section className="detail lg:container lg:mx-auto px-4 lg:pt-16 pt-14">
                    <div>
                        <div className="detail-header pb-14">
                            <h2 className="text-4xl font-bold text-blue-800 text-left mb-1">
                                Top Up
                            </h2>
                            <p className="text-lg text-blue-800 mb-0">
                                Perkuat akun dan jadilah pemenang
                            </p>
                        </div>
                        <div className="lg:flex lg:space-x-4">
                            <div className="w-full lg:w-1/4 pb-8 md:pb-0 md:pr-2 md:text-left">
                                <ItemTopUp 
                                    type={'desktop'}
                                    data={dataItem}
                                />
                            </div>
                            <div className="w-full lg:w-3/4 md:pl-6">
                                <ItemTopUp 
                                    type={'mobile'}
                                    data={dataItem}
                                />
                                <hr/>
                                <TopUpForm nominals={nominals} payments={payments}/>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const data = await getFeaturedGames();
    const paths = data.map((item: GameItemTypes) => ({
        params: {
            id: item._id,
        },
    }));

    return{
        paths,
        fallback: false
    }
}

interface getStaticProps{
    params: {
        id: string
    }
}

export async function getStaticProps({ params }: getStaticProps) {
    const { id } = params;
    const data = await getDetailVoucher(id);
    const dataPayment = await getPayments()
    return {
      props: {
        dataItem: data,
        nominals: data.nominals,
        payments: dataPayment
      },
    };
  }

export default Detail