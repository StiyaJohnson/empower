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
    role: "Handle Music Works",
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Team Members List */}
          <div className="lg:col-span-4">
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
                      {/* <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Application Date</p>
                          <p className="font-medium">{selectedMember.appliedDate}</p>
                        </div>
                      </div> */}
                      {/* <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Experience</p>
                          <p className="font-medium">{selectedMember.experience}</p>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Description</h3>
                    <p className="text-gray-600">{selectedMember.description}</p>
                  </div>

                  {/* <div>
                    <h3 className="text-lg font-semibold mb-4">Experience</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                        
                      </div>
                    </div>
                  </div> */}

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