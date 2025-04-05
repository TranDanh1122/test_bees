import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RegisterDate, TUser } from "@/features/user";
import { Badge } from "@/components/ui/badge";
import { Ellipsis } from "lucide-react";
interface Props {
    user: TUser
}
export default function UserListItem({ user }: Props): React.JSX.Element {
    return (
        <Card>
            <CardHeader className="flex justify-between">
                <div className="flex flex-grow gap-3 items-center">
                    <Avatar>
                        <AvatarImage loading="lazy" src={user.image} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="space-x-2">
                            <span>{user.name}</span>
                            {
                                user.active &&
                                <Badge variant="outline" className="border-blue-500 text-blue-500">
                                    Active
                                </Badge>
                            }
                            {
                                !user.active &&
                                <Badge variant="outline" className="border-red-500 text-red-500" >
                                    Inactive
                                </Badge>
                            }

                        </CardTitle>
                        <CardDescription>{user.email}</CardDescription>
                    </div>
                </div>
                <Ellipsis />

            </CardHeader>
            <CardContent>
                <p>Regiser At : <RegisterDate date={user.registerAt} /></p>
            </CardContent>
        </Card>
    )
}