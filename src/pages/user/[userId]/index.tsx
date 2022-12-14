import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

const MainUserPage: NextPage = () => {
     const router = useRouter();
    const { data: sessionData } = useSession();
    const [auth, setAuth] = useState(false);
    const { userId } = router.query;
    useEffect(() => {
        if(sessionData != null)
        {
            if(sessionData?.user?.id == userId)
            {
                setAuth(true);
            }
            else{
                //redirect to not authenticated
                router.push("/oops/unallowed");
            }
        }
    })
    return(
        <>
            {auth && (
                <>
                    <Header />
                    <div className={"content-container flex flex-col justify-center items-center"}>
                        <Loading />
                    </div>
                </>
            )}
        </>
    );
}
export default MainUserPage;