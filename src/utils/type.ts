export type actionFunction = (
    prevSate:any,
    formData:FormData,
)=>Promise<{message:string}>


export type EventCardProps = {
    id:string,
    eventName: string;
    eventDetails: string;
    eventDate: string;
    eventOwner: string;
    imageUrl: string;
    lat: number;
    lng: number;
  };