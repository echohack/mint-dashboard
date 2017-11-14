
## Response
{
    "id": 14,
    "description": "",
    "default_branch": "release",
    "tag_list": [],
    "ssh_url_to_repo": "git@mintgitlab.syngentaaws.org:mint/material.git",
    "http_url_to_repo": "http://mintgitlab.syngentaaws.org/mint/material.git",
    "web_url": "http://mintgitlab.syngentaaws.org/mint/material",
    "name": "material",
    "name_with_namespace": "mint / material",
    "path": "material",
    "path_with_namespace": "mint/material",
    "star_count": 6,
    "forks_count": 0,
    "created_at": "2015-06-19T20:51:56.657Z",
    "last_activity_at": "2017-11-14T19:01:19.788Z",
    "_links": {
        "self": "http://mintgitlab.syngentaaws.org/api/v4/projects/14",
        "issues": "http://mintgitlab.syngentaaws.org/api/v4/projects/14/issues",
        "merge_requests": "http://mintgitlab.syngentaaws.org/api/v4/projects/14/merge_requests",
        "repo_branches": "http://mintgitlab.syngentaaws.org/api/v4/projects/14/repository/branches",
        "labels": "http://mintgitlab.syngentaaws.org/api/v4/projects/14/labels",
        "events": "http://mintgitlab.syngentaaws.org/api/v4/projects/14/events",
        "members": "http://mintgitlab.syngentaaws.org/api/v4/projects/14/members"
    },
    "archived": false,
    "visibility": "internal",
    "resolve_outdated_diff_discussions": null,
    "container_registry_enabled": null,
    "issues_enabled": true,
    "merge_requests_enabled": true,
    "wiki_enabled": true,
    "jobs_enabled": false,
    "snippets_enabled": false,
    "shared_runners_enabled": true,
    "lfs_enabled": true,
    "creator_id": 1,
    "namespace": {
        "id": 2,
        "name": "mint",
        "path": "mint",
        "kind": "group",
        "full_path": "mint",
        "parent_id": null,
        "members_count_with_descendants": 50
    },
    "import_status": "none",
    "import_error": null,
    "avatar_url": null,
    "open_issues_count": 0,
    "runners_token": "zi7k_9zQzKGPK49npT7U",
    "public_jobs": true,
    "ci_config_path": null,
    "shared_with_groups": [],
    "only_allow_merge_if_pipeline_succeeds": false,
    "request_access_enabled": true,
    "only_allow_merge_if_all_discussions_are_resolved": false,
    "printing_merge_request_link_enabled": true,
    "permissions": {
        "project_access": null,
        "group_access": {
            "access_level": 50,
            "notification_level": 3
        }
    }
}

## Request:
curl --header "PRIVATE-TOKEN: 717fS7TC2Kok21shE9VB" http://mintgitlab.syngentaaws.org/api/v4/projects/14/repository/branches/master

## Response:
{
    "name": "master",
    "commit": {
        "id": "1b33db5434b1bdbc3c440b6679a45668f82f0939",
        "short_id": "1b33db54",
        "title": "Update pom.xml",
        "created_at": "2017-11-10T12:30:47.000-05:00",
        "parent_ids": [
            "2f1224d9a51b229431ff8d7def1c274caf1b57a5"
        ],
        "message": "Update pom.xml\nupdating for release",
        "author_name": "Michael Kirkpatrick",
        "author_email": "michael.kirkpatrick@syngenta.com",
        "authored_date": "2017-11-10T12:30:47.000-05:00",
        "committer_name": "Michael Kirkpatrick",
        "committer_email": "michael.kirkpatrick@syngenta.com",
        "committed_date": "2017-11-10T12:30:47.000-05:00"
    },
    "merged": true,
    "protected": true,
    "developers_can_push": false,
    "developers_can_merge": false
}

## Request
curl --header "PRIVATE-TOKEN: 717fS7TC2Kok21shE9VB" http://mintgitlab.syngentaaws.org/api/v4/projects/14/repository/branches/release/

## Response
{
    "name": "release",
    "commit": {
        "id": "4f3cbd4ca072e3e771b8bf66fff6e5e9e2a14537",
        "short_id": "4f3cbd4c",
        "title": "Merge branch 'B-11241' into 'release'",
        "created_at": "2017-11-14T14:03:43.000-05:00",
        "parent_ids": [
            "b164e47ea87624dd681e08c72f81c3fb95d69481",
            "1273d09b9de4325bd19c10c20c07a102cbbd9869"
        ],
        "message": "Merge branch 'B-11241' into 'release'\n\nfeat(B-11241) - add trial id to register items flow\n\nSee merge request mint/material!1334",
        "author_name": "Rohan Pandit",
        "author_email": "rohan.pandit@syngenta.com",
        "authored_date": "2017-11-14T14:03:43.000-05:00",
        "committer_name": "Rohan Pandit",
        "committer_email": "rohan.pandit@syngenta.com",
        "committed_date": "2017-11-14T14:03:43.000-05:00"
    },
    "merged": false,
    "protected": true,
    "developers_can_push": true,
    "developers_can_merge": false
}