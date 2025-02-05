"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail, Calendar, Briefcase, Download, Clock } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Ron Binoy Mechery",
    role: "Captain",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHxD9x-EogF8Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723468630330?e=1744243200&v=beta&t=ZeB1e2h-jNQLLrHzoXlvlPYBQk_1RYSN63sNLKmM9e4",
    location: "Indonesia",
    appliedDate:"Captain",
    experience: "2nd Total Experience",
    //currentRole: "Senior UI/UX Designer - Google",
    duration: "August 2022 - October 2024",
    description: "Ron is a natural leader with remarkable leadership qualities, inspiring and guiding the team effectively. He currently holds the position of class representative and leads the team as captain. His ability to coordinate and motivate the group plays a vital role in maintaining team unity and achieving goals."
  },
  // Add more team members here with similar structure

  {
    id: 2,
    name: "Stiya Johnson ",
    role: "Vice Captain",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQHCZHhGAG9S_Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724841386447?e=1744243200&v=beta&t=XZVVCrjFQTKC151CYc3yJsOYaQsM9n-EueC46F1F8fY",
    location: "United States",
    appliedDate: "Vice Captain",
    experience: "3rd Total Experience",
   // currentRole: "Lead Frontend Developer - Facebook",
    duration: "January 2021 - October 2024",
    description: "Stiya is passionate about frontend development and plays a key role in handling the team's web-based activities. As the team's vice-captain, she effectively balances her leadership duties with her technical contributions. Her creativity and dedication make her an essential part of the team's success in digital endeavors.."
  },
  {
    id: 3,
    name: "Sethulakshmi P A",
    role: "Scibe",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQELEmNUUce5gA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723392346683?e=1744243200&v=beta&t=OpMl10YlCGECKFRQgZZ_AfDrj3_PHRgiEiz8D4J6YRE",
    location: "Canada",
    appliedDate: "Member",
    //currentRole: "Senior Backend Developer - Amazon",
    duration: "March 2020 - October 2024",
    description: "Sethu is a determined and goal-oriented individual known for her achievements in sports. Her unwavering commitment to excellence inspires the team both on and off the field. Sethu's positive energy and strong work ethic make her a valuable contributor to the team's spirit and anthem."
  },
  {
    id: 4,
    name: "Punnya R",
    role: "Handle Music Works",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "United Kingdom",
    appliedDate: "Member",
    experience: "7th Total Experience",
    //currentRole: "Project Manager - Microsoft",
    duration: "June 2018 - October 2024",
    description: "Punnya is a talented and melodious singer with a passion for music. She collaborates with Sethu to compose and perform the team's anthem, adding a unique and creative touch. Her musical contributions help foster a strong sense of identity and morale within the team"


  },
  {
    id: 5,
    name: "Siddharth Nair",
    role: "Logo Designer",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFTwte4wOVswg/profile-displayphoto-shrink_400_400/B4EZQMdyhtHAAg-/0/1735375924628?e=1744243200&v=beta&t=fJWX-RokLIgCAA6o0kERg8Wo3LdePVr1w8HQL29MGV4",
    location: "Australia",
    appliedDate: "Member",
    experience: "4th Total Experience",
    //currentRole: "Data Scientist - IBM",
    duration: "April 2019 - October 2024",
    description: "Siddharth is a creative thinker with the ability to generate innovative and brainstorming ideas. He brings fresh perspectives to discussions, often coming up with unique solutions to challenges. His imaginative approach drives the team's creative direction and strategic planning."
  },
  {
    id: 6,
    name: " Shifnal Shyju",
    role: "Poster Creation",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFok0GRbjDXaQ/profile-displayphoto-shrink_800_800/B4EZTNTKwSGgAg-/0/1738611143233?e=1744243200&v=beta&t=4SV18YQY1wDHFt6iERWpnVsl4vFrT7LROmgB_sG9kFE",
    location: "Germany",
    appliedDate: "Member",
    experience: "6th Total Experience",
    //currentRole: "Marketing Specialist - Adobe",
    duration: "February 2017 - October 2024",
    description: "Shifnal is responsible for designing visually appealing and impactful posters that represent the team's identity. Her creative skills ensure that the team's presence leaves a strong and positive impression. Her attention to detail and artistic approach make her work stand out."
  },
  {
    id: 7,
    name: "Nijas Backer",
    role: "Sports Enthusiast",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Spain",
    appliedDate: "Member",
    experience: "8th Total Experience",
    //currentRole: "DevOps Engineer - Spotify",
    duration: "May 2016 - October 2024",
    description: "Nijas is a creative strategist who played a key role in developing the team's name and slogan. He actively participates in sports and encourages teamwork within the group. His guidance and innovative thinking contribute to the team's strong identity and success."
  },
  {
    id: 8,
    name: "Noel J Kollarmalil",
    role: "Social Accounts Managing",
    avatar: "https://images.unsplash.com/photo-1502767089025-6572583495b9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "South Korea",
    appliedDate: "Member",
    experience: "9th Total Experience",
    //currentRole: "Graphic Designer - Samsung",
    duration: "July 2015 - October 2024",
    description: "Noel manages the team's social media accounts with a strong sense of social commitment and creativity. He ensures that the team's activities and achievements are well-represented on digital platforms. His ability to connect the team with the audience strengthens their public presence.."
  }
];


export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
      {/* <div className="mb-8 flex items-center justify-center space-x-4">
        <img
        src="https://your-logo-url.com/logo.png" // Replace with your team logo URL
        alt="Team Logo"
        className="h-24 w-24"
        />
        </div> */}
        <h1 className="text-3xl font-bold text-gray-900">UNSTOPPABLE</h1>
       
        <p className="text-gray-500 mt-2">No limits, No boundaries</p>
        <div className="mt-4">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D2DAQEVgDmEp8hicA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738688807344?e=1739304000&v=beta&t=ClGkFZmeWRrtsYadwOSWivS9-yK54K3AdcxOT0NT150" // Replace with your group photo URL
          alt="Team Group Photo"
          className="mx-auto rounded-lg shadow-lg"
        />
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.instagram.com/un_st0ppab1e?igsh=MTZpd2xlaWsybzEyNw==" target="_blank" rel="noopener noreferrer">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBEQACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAYHBQj/xABKEAABAwICBAcKCwcDBQAAAAABAAIDBAUGERIhMUEHE1FhcYGRIkNScnOhscHR0hQjJDI0NlVikpOyFRYzQmOUokWC8ERTZMLi/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAYABf/EADQRAAICAQIDBAkEAgMBAAAAAAABAgMRBBIFITFRUnGhExUiMkFhkbHRFDRCgcHwIyTx4f/aAAwDAQACEQMRAD8A3B5DWkkgAayTuXHGUYyxnLcZJKG1yllCDk+Ruozf/PpXvaLQqtKdnOX2EzbfIp2kvSF7AaSgnYDSUE7AaSjISrBmobDVQM0ORiqDzUbhiqBpKMjFUDNRkYqgs12Q1UDNdkYqws12Q1WDNdkNVhLshbEHkpyTtCU5O2naw1iOtsFSHQuMtK4/G07jqdzjkKRqNPC5c+vaItojNGy2q4U1zoYqyjk04ZBmDvHKDzheBOuVctsup5c4OD2yJiAEonCjfnUVAy1U79GarGcpG0RcnWdXQCvS4bRvm7H0X3JxkyvSXunejBpKMk+jBpIchKsPSUZCVYNLLWSoyMVQ9FBPN/Bglk8Rhd6AlucV1YxQSHxa7ofm2u4u8WkkP/qg9LDvL6oNRj2oX+x7v9j3P+xl91D6avvL6oYlDvL6oH7Hu/2Pc/7KX3V3pq+8vqg8Q7y+qB+x7v8AY9z/ALKX3VHpYd5fVBr0feX1QP2Pd/se5/2UvurvTQ7y+qC3V95fVBG0XVvzrTch00UvuqPSw7y+qCUq+8vqhqSjq4v4tJUx+PC5vpCLfHt80HmL6PzGBlnlvG0ciLIWwPJdkjaGuydtAiydtApyRtLfwcXp1BdRb5XfJqs5NHgy7j17OxUtdVvhvXVFPWU7obl1RrK8Y8kwvHda6uxXXvLs2xOELOYN1enMrSaOGzTxX9lmEeRwVYyHgCjISiGhyEo5LdhbAldeY2VVW80lE7ItJbm+Qcw3DnPYqOo1sa/ZjzYE7Yw5LmzR7VhKyWsNMFBE6Rvfphpv7Ts6l5dmpts6srStnLqzttDWjJoAHIAkN9osPMLjg1xwFxwFxwFxwWYXHA1LjjnXGx2u5t0a2hgl5HFmTh0EawjjbOHOLGQusg/ZZSMQ8Hb42PqbHI6TLWaaQ6z4rvUe1XqtbnlZ9T0aOIJ8rfqUJ7HxvdHIxzHtJDmuGRBG4hXlLJ6iw+aEqcnbQZIsg4FMe6GRksZIfG4OaRucDmD5lOc8jnFNG+UVZHU0cE4IHGxtf2jNZ+UHFtGblBxk0ef7g7jbjWSf9yeR+fS4laOLxBL5FyMeQxkpcglEGSByDUS68HWFmXaodcbhHpUcDso2O2SvHLzDzqjq9S4LbHqK1FmxbV1Na1MGW4LySgU3EHCDQ2+R1Pbofh07dTnB2jG09OWvq7Var0spLMuRdp0U5rMuSKpUcIN9mcTG6mhHIyLPLrJKsLS1rqXI6CpdSG/GeIn/AOpOb4sTPYp9BV2DloqO6I/e/EZ/1ib8uP3V3oau79w1o6O79wfvdiP7Yn/Lj91d6Kru/cn9HR3Pv+QfvdiP7Xn/AC4/dU+iq7v3C/R0dz7/AJB+92I/tif8uP3VPoau79yf0Wn7n3/IpmMcRN23WR3jRx+6odFT/iQ9Dp+59yVDjzEEZGlURSAbnwj1If01XYA+HUP4eZYLPwktc8R3ejEbd88BJA6WnX2EpM9Jy9llS7hbSzW/6Ze6WrgraeOopZGSwyDNj2nMEKo008M8qcZQk4yWGVHhAwwyupn3Sij+WQtzka3VxrBt6wPRlyK1pr9r2y6F/QarZJVy6P7mW7l6R7uAKcg4ApyRgvtpvZgtVHDpfw4GN7GgKhZXmbfzPJtozZJ/NmdOPdOPKV6mQUgghbGKIuOJ0sjI2DN73BrRyknIIJSwshqOOZv9lt8drtdNQwjuYYw3pO0nrOZXhTk5ycjyJy3ycu0p/CbiCSlZHaKN5a+ZunO8HWGbA0dOvqHOrOmrTe9l7Q0KT9JLojM1dbPWUQ0OQ1ENRkPaBRkJRDUZC2gyXZOwBcpEpAyU7icFmwrg6e/RuqZpjTUgJa1wbm55G3Lm50qy9Q5IoavXR072JZl9ibiLAU1son1lvqHVTIhpSRvaA8N3kZaj0KK9TueJCtNxKNktlixn4kXAN+ktl1jpJZM6Kqdolp2Medjh0nUenmRaiClHd8UN4hpVZW5r3ka4da88zZiWK7YLVf6uljblFpcZGORrtYHVrHUvVpnvgmanSWelpUn4HITsj8ARZIwTI6lzY2tB2ABA0JdfM5RCdk85RDAQNjYxO1g2mFTiq2RvGbRMH/hzcPOAkXyxWyL/AGapM3MryTwzDsX1LqzE9ylcfmzmNvMG9z6s+tejVygkaPSV7aYo5CNstKIaHIaQFGQsHWs2HLreRp0NN8UdXHSnQZ27+oFBKyK6sRfqqaPffPsLXScGcpaDWXJjTvbDETl1k+pJd/Yjz5cXjn2IfUcm4Mm6JMF0cHffi1eYrvTvsIjxh/yh5/8Awr12wVerax0nFMqoW69OnJccuduWfZmmK2LL1PEdPbyzh/MrwTMl/Br/AAf1kFRhuljiLeMpwY5Gjccyc+vaqdq9psy/Eq5Q1Db6Pode9VsFDbKmpqXBsTIznnvJ2DpKGKbeEVaK5WWKMOpgw0gM2nQcNYI/lK9LKNltXxN9tVT8MttJVHVx0LJMukArzJLDwYy2GyyUOxmecK8AZdaCpA1yQOYT4pzH6irmll7LR7fCJZrlH5/f/wAKOrmT1doMlOQWhY2Kcg4IpUtnmxiGEDY2MSzcHLdLFlJ91kh/xVbUP2BGtWKGbKdy888MwC6O07nWP8KokP8AkV6EX7KNZTHFcV8kR1DY9RBzk5IchKJfsE4MZURx3K8x5xuydBTn+YeE7m5B2pNlnwR4+v4ht/4qn4v8GjhjWNAYAABkANgSDwn2kCtvlrt7tCtuFNC/wHSDS7Nqnax9emvt5wg2M0+JrLUyCOK6UpedQa6TRJ6M8s1219gUtFqYrLg/odZuTtY19CgrFVxbg+nuzJKqia2G4AZ6Q1Nl5ne1MhZt5M9LRcQlQ9k+cfsZhBUVtpq5Pg8stLUMOhIGnRII3FWHiS5mklXVfBZWUKuF0r7lo/D6uWfR1tDzqHUNS5JR6A16eqr3I4ImSNSG4Nswg7TwxbD/AOO0dip2e+zIa1Y1M/Eq3Cy3KO2v+88eYJ+m6s9Hg3WaM6VzJ7mAwpIaFjYpAwRcta5s8+MQ0tscolp4NfrZB5KT0Kve/YK3EF/134o2EqmZ88/Vn0yo8s/9RVxS5Gzrj7C8EM5KNwxIsOCbKLze2NmbnTU442YeFyN6z5gUE54RT4hqP09Lx7z5L/fA2UABuWW5VzKGZYyxnPNPJb7RMY6dncyVDHd1Id4adw59/RtZFL4mi0HDIqKstWW+i7PEpB1kk6ydZPKUzJ7eAsgdRGYXZOwWDDOKa2xzMYXvmoTqfA47Byt5DzbD50LimUdZw+vUrOMS7fya/Q1cFbSRVNLIJIZW6TXcoSnyZk7ISrk4SXNFB4TbKGGO8QNAzPF1GW/wXersTK5fA9zg2pzmiXiv8r/JQU3J72AKckG0YJ+qtt8j6yq0/eZj+Ifup+JXuFn6HbvKv/Snafqy9wX35+Bm6t5PfwBEiMCxsRZAI+RzKXKSKcYigwpMpjUi1cGzMsVQn+lJ6EiyeVgqcSX/AFn4o10pJnDBKuP5XUeVd6Sp9Ibav3F4Degh9IMwaXwX0Yis9TUkZOnnIz+60ZekuUqWTO8Znm6MF8EdfGle+24dqponZSvyiYRqyLjln1DM9S5vBU4dSrdTGL6dfoY1xeQAGoDYp9IbISWlEpk4CyUpkhqcnYNF4K7g+SGtt0h7mEtli6HZ6Q7QD1oZdpnOO0pShavjyf8AXT7+Ra8UUYrsPXCnyzc6BxZ4wGY84CFPDPL0Vno9RCXz8viYg0gtBG9PNrgB2KckYNowT9Vbb5H1lIn7zMbxH91PxK/wsfQrd5Z36Uynqy/wT35+BmytJmgAjIwLGxSA0EGa1RnYVoocaxJlYMSLRweNyxPCf6T/AEJanllLif7Z+KNWKYZow2qZ8qn1d9d6SqbnzNxX7i8BvQQ7wzT+DlwOHA0bWTPB7c/WrNMsxMvxdY1OfkguEWJ0mG3vbsjmY49Gej6Spt90ng8sarHan+f8GWlir7zViSxGpkjZYmKYQktyTVMkuvBTG43Ovl/lZA1p6XOOX6SifM8Lj0kqoLtb8v8A00O6vbFbKuRxyayF5J/2lCjPUx3WxXzRgjNTGjkGtOyb2XNilJBtGCPqrbfI+spU/eZi+I/u7PEr/Cx9Dt3lnfpR1dWX+Ce/PwM4VhGhCTEwRQ2IsgkgM1rxZTK6HAxJlMMsuAW5Yki8m/0KaZZmUeJ/tn4o1Aq4ZkxWqb8qm8o70ryJS5m3r9xDegh3jC48HVaI5qqge7LjPjWDlI1HzZdit6WxZcTxONVOSjb2cmXSvpGV1FNSza45WFpV2SUlg8KqyVU1OPVGP3K3zW6slpaluUkZ6nDcRzH2ry5ZhLazbUXwvrVkehELESmOGyxMUwkI4sucGNBLnOAAA1knUAOfWmxmTnCya5gyxustoDJgBUzO4ybI7DuHUFZXQxvEtWtVdmPurkiNwiXJtHhuaAOykq/iWjlB+d5s+1EhnB6HbqlL4R5/jzMkRmwCU5INpwT9Vbb5H1lLl1ZieI/u7PEr3Cx9Ct3ln/pR19WehwP35+BnCeaEBRpgihsR5AZ0AxZyUxCHAxJcwyw4GGjiKE8rHjzJmmlm1FHif7Z+KNMO5eoZgx2qjyq5wd0jvSVn5z9pm2r9yPgNaKDeMHaSaSjqoqmA5Sxu0mn/AJzIo2uL3L4A2QjZBwl0ZqdnukN1o2zwkA7Hs3sdyL3KbY2xzEx+p009PPZL/wBE3my0d3gEdWw6TfmSNOTmqbK42LDJ02qt00s1v+il1mBbhG53wSaCaPPVpEsd7FSlpJro8nu1capkvbi0/qhiHA92lflIaeFu8ukzPUAFMdNYMlxnTJcsv+vyWvD2E6G0P48kz1QGqR2oN8UblbrqUDxtZxO3Urb0j2fk7lRPFSwPmnkbHFGM3OccgAmt45lCEJTkoxWWzHsV3l98uZmALYIwWQMO5uesnnOQSfSZZtOH6RaWrb8Xzf8AvyOERkU6Mi8EjONqwWMsLW0f0QhfUxHEf3dniVzhYPyW2t/qvPmRQ6no8C9+fgjOU/JoQIkCxY2BFkA64astKQhCwxJlII7OEjxeIKQ+EXN/xKbpZ/8ANFf70KfEFnTS/r7mmle4zLGUXSIsudWwjLRnePOVmbm1ZJfNmy08s0wfyRG0UrcOC0V24lEm31tTbagT0kmg7eMsw4chCbVfKqW6LFX0V3w2TXIutqxbQ1Q0aw/BZQNemc2HoO7rXr08Qrn7/Jmf1HCrq3/x+0vM78U8MzQ6GWN7TsLHAgq6pRlzTPNlCUHiSwLc9jBm9waOc5IskJN9Di3TFFroA4fCWzyDvcBDjnznYEieorh8cl6jhuoua9nC7WUDEOIKy9O0ZPiqZpzbA06s+UneVUle5mk0egq0qyub7fx2HBcxFGRfGHsVmEghsjJPi8nG4YYjMWHrawjIimjzHS0FcYTWy3amx/NlO4WJRxtti3kSOy/CPWmQPY4FHlY/AoCYj3wIwRY2KQDuhqx8pFdCw3mS3Ikl26X4LX01Rujla49GevzZqK7NlkZdjQu6G+uUe1GqAh4zB1bc1qOpjyhYwojT3Z0wHcVA0gecaj6u1Z7iVey7d8GaXhl2+jb8YnE0OZefk9HIWhzKdxOQiwrsk5EOYi3E5EgOYc2EtPKDkjUuwnk1zESOkeMnvc7xjmmKbfVkpJdENOamRkGhp7U6MiRlzU+Mghl7VYjIJC7fb33O4U9DGDnO8NOW4bSeoZlWq5C77lRU7X8P9+5ucbRG1rWjJrQAAmmAy28synhKrPhWJOKY7NtNC1mrc4kuPmLexMjyRreDV7dLu7Xn/BVUaPUAiQI4GuIGpGLbLI6PRkc3wSR51ipvDaKqeUmKaxKcicjgZzJbZ2S+YWrxVUDYZHfHQANdnvbuK0XDtQratr6x/wBRm9fR6O3cujJt1t8VypjDKMjta8bWnlVjUURvhtkI0+olRPdEo1daqmgkLZ4zo7pB81yzN+msoftrl2/A0VOrruXsv+iLxSQWN4RiUk7xDolJKmNOiRINSGnxpiYakMuajiw8jTmpykEhlzU+LJyCmoqiumENHA+aQ/ysHp5OtWq8yeEDZdCqO6x4RpGEMMNsrDUVWi+tlGRI1iMeCPar9cHFczLcS4i9U9sOUF5/M7N5uNPabdNW1JAZGNmetxOoAc5OSaUdPRK+1Vw6sw2qqJaupmqah2lLM8veeco0buFca4KEeiG0ZwCiQLO7SW10lLDIG/OY09oUOXM86y/E2jt3GDirlVMy2Su85zWN1C22yXzYuie6qL+Q21ir5G5HWxIWC5Eqiklo52zQnJzewjkKZVbKqanHqJujG2O2Rc7bcoa2Pue5kHzmHaPatLptXXfHlyfYZ+/TypfPoSyA4ZEAjnCtdROWuhEktFBISXUsWvkGXoVeWjol1ih0dVdHpIZNgtx7wR0PcPWlPh2mf8fNjFrr+0ScOWw95f8AmO9qH1ZpuzzYXrHUdvkhJw1az3l/5rvap9Wabs82T6y1Pb5IScLWk94k/Nd7V3q3Tdnm/wAk+s9T3vJCThO0HbBJ+c/2qfV2n7PN/kL1rqu95IIYRs2+meemV3tRrQ0LovNnetdV3vJDseGLPGQRQREjwiT6UxaapdIi5cR1Uv5s6MFPDTM0IIo4mbmxtAHmTkkuiKkpym8yeRq43Gkt1K6etmbEwcu1x5AN5XSko9Q6aLLpbK1lmTYqxBPfakajHSRn4qL1u5/QgU8s1+g0MdJHtk+r/wAI4CemXwI0CwnahnyI0CbDZbI1lnoWvaC4U0YcefRCTJ5bMfqNTuum12v7kLFNEY69tSB3Ew18zhq9GSzvE6nGzf8AB/cucOuzXs+KOWyNeWXnIeZGuBch1sajADkLawhwIzBGsEFEsp5QLw+TOlT3WrhGTi2Uff29qv1cRvhyfPxKc9JVLpyJjL74dOf9rlcjxZfyj5iHoX8JC/27Bvhl6svai9bVd1+X5B/RS7UA36nHeZ/wt9qn1tT3X5fk79DY/iv9/oScQ0w7zUfhb7V3ranuvy/JPq+ztXn+BJxJSjvFR+FvvLvW1Pdfl+SfV1vavP8AA27FNG3/AKeq/C33lPrWnuvy/Ia4Za/ivP8AA2/F9G3ZTVR6m+8u9aVv+L8vyEuE2v8AkvP8EWXG0Lf4dDKfGeB7VPrGL6RGx4NN9ZrzOPcMbXGUaNLFDTjZpfPcO3V5lD1s5dFgu1cGoTzNt+RVK+pqK2czVcz5pdmk456uQcgURm5PLPXqrhVHbBYRCeFagxqGHbVbgSEmoFnQsFufdbxS0bR3L3gyHkYNbvNq60TeFkq6u9UUym+zzNzGoAAalXMQRbjRsraV0TxkdrTyHlSNRQroODG02uqe5FTfTPgldHK0hzTsWYsrlXLbJcz3I2xnHchbY0GCHIcbGpwC5CxGuwDuFaCnBG4LQXYO3AManBO4Q6NcFuGnMXBKQy+NRzGJkeSNSsjEyLLGiQ6LIc0YTIjoyIM0afFjYshyNyVmDHJjDwrUCSPIFcrYQgZkgAEk6gANZVhAto1bAWHHWmjNXWMyrZxrae9s3N6d57NyCcsmT4prf1E9kPdXmy2oDywFccQblTRTQOc9vdMbmHDaqesohZBtrmh9FkoSSXxOCzWAVnUerLkOtAUgMVkFIOQ8guOyHkFJGQiAuwTkQQFAQ28BQEmMvAXDEMSALhiIsjQpQ6JDmaExDokCcDJOgOiQJgFYgPiRHq3AYR5FcrJL3wZ2eiqKd91nj4ypjlcyPS+aznA5edOk8Ge4zqbIy9CnhNZfzNDZsQGfXQUuOP/Z" alt="Instagram" className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/unstoppable-ba71b234b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,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" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="https://x.com/2025unstoppable?t=zBkycvdyFNyfat-ThyKpSw&s=09" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,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" alt="Twitter" className="h-8 w-8" />
          </a>
          <a href="https://youtube.com/@unstoppable-i5m?si=qcBV7emXG9TNZi73" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAclBMVEX2HA3////1AAD8vr3+3dv4UEv2DgD94N/+7u33MCb+9fT+5eT//Pz2GQj919b7rqv4YFn8x8T9zMv5k5H4dHD3WVf7qaf4g4H3UVD7o6D4X132KCD7nJj2Hxf3PTb4amX4S0T5j4r2NC74eXf2PD37t7RCjdMWAAAEn0lEQVR4nO3djZayKhQGYMDEQtR0LCutsebr/m/xoM1PmZlaa7n3PrwXMOOzCFCRDeOEwqa+gHfGYqDGYqDGYqDGYqDGYqDGYqDGYqDGYqDGYqDGYqDm/4ZRvhcmSRI7EyU2/zz0fPUyRs3i6CNdLcTEWazSjyiePQF1YsJ1tqsdMmCTJpC1aJetw3GYeZRtzN+Q0zKuU13NJovmgzHz7S6fvEHuY5oo320fcdoxuij38CSXBHJfFro/JjkEUClVzMUdkp4YtYTUUdojxbJlZLvD6FiKqS+1T4SM735rTYwqAvDNcokMimbjNDB+Cv8n9pNApH4XZvYpAHf8ZgLxOXuMCZcoustfxDJ8hPE2yCxGs/HaMXMXncVo3HkrpkRoMZqyDZOitBhNeo/ZIrUYzbaJSXI080szMk9uMQpj5/+JcNUNptgjmiybCfbFNSYs0f7Iqsgy/MOoDLXFaDL1i4lP2DGn+Aejjoh7/yXiqL4xiIfln1yGZ1Y9j6FvGNM01ZOawXjYe0wVefJqjEOgYUzTOBVGYb3DvI1IlcH4WN5gdEcGvsHEJBrGNE1sMPgnmUvEkTN9oII5aKYwvVzqSiAU84g0jGkaj53pYM6Mwr3MJaJgNKbMKiJlLokps4p02YEO5sAWREZmMzYv2P5tf6xaq5+0md9HYaJcO0WOZ62qK8H+bB5aw2NO4Y5ClvUqlgoziZ8j3O8lOT1LBXbOL8ZktkTOucZUnL1EPBTcYjhPVie8nCaGcydFy7nHcOV8LXD2nRZMzUE5ULdiOJ87XwhHtgcYw4k/0XEeYiqOmXemvr5B6cCYvhOXqO5AOzEmzgIR5xnGcHIG+cvP6zzHcB79A/tN7m36YLjarlBwemHqj78RfNDaE8O5v96BH6h7Yzj3og1wzgCMedyJXNAD9SAM1976AJgzDGM48y0De8s2FGOiPkBtz7nKCIxpnmMAcJPOSIyZd7ITwKX7kRgzUGf/wL0qGI3hPDxC+3rnBYy5A81hdZyXMBzY+t1LGAXsg9dXMOrIqPzMdLQBZhmPiczIDMwyEqPXDOIdzQiMnq8lRMoIjPK2IFulykCMCgvADzSDMDr+AEwZhNFxBpoyAKOdL+CU3hh9Tk/QKX0x59UC3MNLS/pgnBLJq/PnmDMD+bzflm6MVuc9/K7ymy6M9tcIev1VHmN0uMW1CNiBSdBRHmF0Avu+5UHaMOa+BV+rVGnBxOkBwwzZkjuMs0P7UVMTE7sMLaWBiQ9oJvvW/H1wqhyMA9hNvj8F1v4Z5wB2E5k7/LLyCnshuV/ELnKiclrK+3YDCCGnprxxy0kw7QAWLGhtBgK2zPNCpEtrAx2prY2kNp2S2g5MaqM2qS30pIob0Co7QaogCKlSLaSK6NAqb0Sq8BSpkmC0irWRKqNHq8AhqdKTtIqC0irXinl4viukS6vEMa3i07TKgtMq2E6qlD6tQw5oHT+B62AQ+eRgEFpHttA6TIeTOuaoCqEDqDito8E4qUPbag6d4/Tq0DnosA6hIyi/QVQOB8UVi4Eai4Eai4Eai4Eai4Eai4Eai4Eai4Eai4Eai4Eai4Ga/wDB4mjCFKLJDgAAAABJRU5ErkJggg==" alt="Youtube" className="h-8 w-8" />
          </a>
          
        </div>
            <div className="mt-8">
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Welcome to our Team</h2>
                  {/* <Button variant="outline" size="sm">
                    Sort By
                  </Button> */}
                </div>
              </CardHeader>
              <ScrollArea className="h-[calc(100vh-300px)]">
                <CardContent className="p-0">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="p-4 border-b hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedMember(member)}
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-medium">{member.name}</h3>
                          <p className="text-sm text-gray-500">
                            {member.appliedDate}
                          </p>
                        </div>
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </ScrollArea>
            </Card>
          </div>

          {/* Right Content - Selected Member Details */}
          <div className="lg:col-span-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={selectedMember.avatar}
                        alt={selectedMember.name}
                      />
                      <AvatarFallback>{selectedMember.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                      {/* <p className="text-gray-500">
                        I&apos;m {selectedMember.role} based in {selectedMember.location}
                      </p> */}
                    </div>
                  </div>
                  {/* <div className="flex space-x-2">
                    <Button variant="outline">Move Draft</Button>
                    <Button>Schedule Interview</Button>
                  </div> */}
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Overview</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Responsibilty</p>
                          <p className="font-medium">{selectedMember.role}</p>
                        </div>
                      </div>
                     
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Description</h3>
                    <p className="text-gray-600">{selectedMember.description}</p>
                  </div>


                  <div>
                    <h3 className="text-lg font-semibold mb-4">File Attachment</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="mr-2 h-4 w-4" />
                        {selectedMember.name.toLowerCase().replace(" ", "-")}-cv-updated.pdf
                      </Button>
                      {/* <Button variant="outline" className="w-full justify-start">
                        <Download className="mr-2 h-4 w-4" />
                        {selectedMember.name.toLowerCase().replace(" ", "-")}-portfolio-new.pdf
                      </Button> */}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    
  );
}