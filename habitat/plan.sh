pkg_name=mint-dashboard
pkg_origin=echohack
pkg_version="0.1.0"
pkg_scaffolding="core/scaffolding-node"
scaffolding_node_pkg="echohack/node/8.9.1"
pkg_svc_user=root


declare -A scaffolding_env

scaffolding_env[PORT]="{{cfg.port}}"
scaffolding_env[GITLAB_PRIVATE_TOKEN]="{{cfg.gitlab_private_token}}"