// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
// import { ReactNode } from "react";

// import { auth } from "@/lib/auth";

// type SessionType = Awaited<ReturnType<typeof auth.api.getSession>>;

// interface WithAuthenticationProps {
//   children: ReactNode | ((session: NonNullable<SessionType>) => ReactNode);
//   mustHavePlan?: boolean;
//   mustHaveClinic?: boolean;
// }

// const WithAuthentication = async ({
//   children,
//   mustHavePlan = false,
//   mustHaveClinic = false,
// }: WithAuthenticationProps) => {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   if (!session?.user) {
//     redirect("/authentication");
//   }

//   if (mustHavePlan && !session.user.plan) {
//     redirect("/new-subscription");
//   }

//   if (mustHaveClinic && !session.user.clinic) {
//     redirect("/clinic-form");
//   }

//   // Se children for uma função, passa a sessão como parâmetro
//   if (typeof children === "function") {
//     return children(session);
//   }

//   return children;
// };

// export default WithAuthentication;
