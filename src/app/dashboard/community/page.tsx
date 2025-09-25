'use client';

import { useState } from 'react';
import { communityPosts } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ArrowUp, MessageSquare, PlusCircle, Send, Users } from 'lucide-react';

export default function CommunityPage() {
  const [selectedPost, setSelectedPost] = useState(communityPosts[0]);
  const [newComment, setNewComment] = useState('');

  return (
    <div className="space-y-8">
       <div className="flex items-center gap-4">
        <Users className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold font-headline">Student Community Forum</h1>
          <p className="text-muted-foreground">
            Connect with peers, ask questions, and share your knowledge.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Posts List */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Threads</CardTitle>
              <Button variant="ghost" size="sm">
                <PlusCircle className="mr-2 h-4 w-4" /> New Post
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-2">
                {communityPosts.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className={`w-full text-left p-4 hover:bg-secondary/50 transition-colors ${selectedPost.id === post.id ? 'bg-secondary' : ''}`}
                  >
                    <h3 className="font-semibold text-sm">{post.title}</h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                      <span>by {post.author}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{post.comments.length}</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <ArrowUp className="h-3 w-3" />
                           <span>{post.upvotes}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Post and Comments */}
        <div className="md:col-span-2">
          {selectedPost && (
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">{selectedPost.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={selectedPost.avatar} alt={selectedPost.author} />
                    <AvatarFallback>{selectedPost.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>Posted by {selectedPost.author} &bull; {selectedPost.timestamp}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/90 whitespace-pre-line">{selectedPost.content}</p>
                <div className="flex items-center gap-4 mt-4">
                    <Button variant="outline" size="sm">
                        <ArrowUp className="mr-2 h-4 w-4" /> Upvote ({selectedPost.upvotes})
                    </Button>
                    <Button variant="outline" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" /> Comment ({selectedPost.comments.length})
                    </Button>
                </div>
                
                <Separator className="my-6" />

                <h3 className="font-semibold mb-4">Comments</h3>
                <div className="space-y-6">
                  {selectedPost.comments.map(comment => (
                    <div key={comment.id} className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.avatar} alt={comment.author} />
                        <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-semibold">{comment.author}</span>
                          <span className="text-muted-foreground">{comment.timestamp}</span>
                        </div>
                        <p className="text-sm mt-1">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                   <Avatar className="h-8 w-8">
                    <AvatarImage src="https://picsum.photos/seed/user/32/32" alt="Current User" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <Input 
                    placeholder="Add a comment..." 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <Button size="icon" disabled={!newComment}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
