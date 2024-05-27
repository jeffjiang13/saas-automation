import React from 'react'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs'
import { onDiscordConnect } from '../connections/_actions/discord-connection'
import { onNotionConnect } from '../connections/_actions/notion-connection'
import { onSlackConnect } from '../connections/_actions/slack-connection'
import { getUserData } from '../connections/_actions/get-user'

type Props = {
  searchParams?: { [key: string]: string | undefined }
}

const LogsPage = async (props: Props) => {
  const {
    webhook_id,
    webhook_name,
    webhook_url,
    guild_id,
    guild_name,
    channel_id,
    access_token,
    workspace_name,
    workspace_icon,
    workspace_id,
    database_id,
    app_id,
    authed_user_id,
    authed_user_token,
    slack_access_token,
    bot_user_id,
    team_id,
    team_name,
  } = props.searchParams ?? {
    webhook_id: '',
    webhook_name: '',
    webhook_url: '',
    guild_id: '',
    guild_name: '',
    channel_id: '',
    access_token: '',
    workspace_name: '',
    workspace_icon: '',
    workspace_id: '',
    database_id: '',
    app_id: '',
    authed_user_id: '',
    authed_user_token: '',
    slack_access_token: '',
    bot_user_id: '',
    team_id: '',
    team_name: '',
  }

  const user = await currentUser()
  if (!user) return null

  const onUserConnections = async () => {
    await onDiscordConnect(
      channel_id!,
      webhook_id!,
      webhook_name!,
      webhook_url!,
      user.id,
      guild_name!,
      guild_id!
    )
    await onNotionConnect(
      access_token!,
      workspace_id!,
      workspace_icon!,
      workspace_name!,
      database_id!,
      user.id
    )

    await onSlackConnect(
      app_id!,
      authed_user_id!,
      authed_user_token!,
      slack_access_token!,
      bot_user_id!,
      team_id!,
      team_name!,
      user.id
    )

    const connections: any = {}

    const user_info = await getUserData(user.id)

    // Get user info with all connections
    user_info?.connections.map((connection) => {
      connections[connection.type] = true
      return (connections[connection.type] = true)
    })

    // Google Drive connection will always be true
    // as it is given access during the login process
    return { ...connections, 'Google Drive': true }
  }

  const connections = await onUserConnections()
  const user_info = await getUserData(user.id)
  const connectionCount = Object.keys(connections).length

  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Logs
      </h1>
      <div className="relative flex flex-col gap-3 p-6">
        <section className="flex flex-col gap-3">
          <div className="p-6 shadow rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">User Information</h3>
            <p><strong>Name:</strong> {user_info?.name}</p>
            <p><strong>Email:</strong> {user_info?.email}</p>
            <p><strong>Profile Image:</strong> {user_info?.profileImage && <img src={user_info.profileImage} alt="Profile" className="h-12 w-12 rounded-full" />}</p>
            <p><strong>Tier:</strong> {user_info?.tier}</p>
            <p><strong>Credits:</strong> {user_info?.credits}</p>
            <p><strong>Created At:</strong> {user_info?.createdAt ? new Date(user_info.createdAt).toLocaleString() : 'N/A'}</p>
            <p><strong>Updated At:</strong> {user_info?.updatedAt ? new Date(user_info.updatedAt).toLocaleString() : 'N/A'}</p>
          </div>
          <div className="p-6 shadow rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Connections</h3>
            <p><strong>Total Connections:</strong> {connectionCount}</p>
            <ul>
              {user_info?.connections.map((connection) => (
                <li key={connection.id}>
                  <p><strong>Type:</strong> {connection.type}</p>
                  {connection.type === 'Slack' && <p><strong>Slack ID:</strong> {connection.slackId}</p>}
                  {connection.type === 'Discord' && <p><strong>Discord Webhook ID:</strong> {connection.discordWebhookId}</p>}
                  {connection.type === 'Notion' && <p><strong>Notion ID:</strong> {connection.notionId}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 shadow rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Workflows</h3>
            <p><strong>Total Workflows:</strong> {user_info?.workflows.length}</p>
            <ul>
              {user_info?.workflows.map((workflow) => (
                <li key={workflow.id}>
                  <p><strong>Name:</strong> {workflow.name}</p>
                  <p><strong>Description:</strong> {workflow.description}</p>
                  <p><strong>Flow Path:</strong> {workflow.flowPath}</p>
                  {/* <p><strong>Nodes:</strong> {workflow.nodes}</p>
                  <p><strong>Edges:</strong> {workflow.edges}</p> */}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LogsPage
