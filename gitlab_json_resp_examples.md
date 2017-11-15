
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

##Request

http://mintgitlab.syngentaaws.org/api/v4//projects/14/repository/compare?from=MINTMM20171103&to=master
##Response


{
    "commit": {
        "id": "82f9f6c6d231c38af318e3159fdd11efac3b473e",
        "short_id": "82f9f6c6",
        "title": "Merge branch 'D-05570' into 'master'",
        "created_at": "2017-11-15T14:05:23.000-05:00",
        "parent_ids": [
            "1b33db5434b1bdbc3c440b6679a45668f82f0939",
            "f9da8025ce0ff8d745fefee250db609be2bd6def"
        ],
        "message": "Merge branch 'D-05570' into 'master'\n\nD 05570\n\nSee merge request mint/material!1335",
        "author_name": "Michael Resnick",
        "author_email": "michael.resnick@syngenta.com",
        "authored_date": "2017-11-15T14:05:23.000-05:00",
        "committer_name": "Michael Resnick",
        "committer_email": "michael.resnick@syngenta.com",
        "committed_date": "2017-11-15T14:05:23.000-05:00"
    },
    "commits": [
        {
            "id": "a7b72ec3915d05125f7f8568e24bf7e62a697942",
            "short_id": "a7b72ec3",
            "title": "feat(B-08455) - don't allow reconcile at different centers on reconcile page",
            "created_at": "2017-11-02T13:17:01.000-04:00",
            "parent_ids": [
                "0f7f0b8f612a168aa708ed6475c98fca936a9511"
            ],
            "message": "feat(B-08455) - don't allow reconcile at different centers on reconcile page\n",
            "author_name": "t874105",
            "author_email": "michael.resnick@syngenta.com",
            "authored_date": "2017-11-02T13:17:01.000-04:00",
            "committer_name": "t874105",
            "committer_email": "michael.resnick@syngenta.com",
            "committed_date": "2017-11-02T13:17:01.000-04:00"
        },
        {
            "id": "326fe0a96e6afa7ebbf609d84d8e53d21d62af8d",
            "short_id": "326fe0a9",
            "title": "Feat: (B-11185) Update wording in MM",
            "created_at": "2017-11-03T14:25:12.000-04:00",
            "parent_ids": [
                "77275505046655bc6e5e8d9022498bc32323ae25"
            ],
            "message": "Feat: (B-11185) Update wording in MM\n\n- change/remove custodian to owner\n- I had to recreate this change directly to master \n\nCloses: B-11185",
            "author_name": "t920479",
            "author_email": "t920479@USREL5CG6507BKM.NAFTA.SYNGENTA.ORG",
            "authored_date": "2017-11-03T14:25:12.000-04:00",
            "committer_name": "t920479",
            "committer_email": "t920479@USREL5CG6507BKM.NAFTA.SYNGENTA.ORG",
            "committed_date": "2017-11-03T14:25:12.000-04:00"
        },
        {
            "id": "ec62c0c29d278a174dc796b0419e91a5ce04d935",
            "short_id": "ec62c0c2",
            "title": "Merge branch 'B-11185-master' into 'master'",
            "created_at": "2017-11-03T14:27:39.000-04:00",
            "parent_ids": [
                "77275505046655bc6e5e8d9022498bc32323ae25",
                "326fe0a96e6afa7ebbf609d84d8e53d21d62af8d"
            ],
            "message": "Merge branch 'B-11185-master' into 'master'\n\nFeat: (B-11185) Update wording in MM\n\nSee merge request mint/material!1324",
            "author_name": "dana bradbury",
            "author_email": "dana.bradbury@syngenta.com",
            "authored_date": "2017-11-03T14:27:39.000-04:00",
            "committer_name": "dana bradbury",
            "committer_email": "dana.bradbury@syngenta.com",
            "committed_date": "2017-11-03T14:27:39.000-04:00"
        },
        {
            "id": "c644a0f9debf45dcdbde7aa4f4bf5f7dba8842b8",
            "short_id": "c644a0f9",
            "title": "feat(B-11211) - allow sown (plot) containers to be moved to diff locations",
            "created_at": "2017-11-06T11:48:04.000-05:00",
            "parent_ids": [
                "ec62c0c29d278a174dc796b0419e91a5ce04d935"
            ],
            "message": "feat(B-11211) - allow sown (plot) containers to be moved to diff locations\n",
            "author_name": "t874105",
            "author_email": "michael.resnick@syngenta.com",
            "authored_date": "2017-11-06T11:48:04.000-05:00",
            "committer_name": "t874105",
            "committer_email": "michael.resnick@syngenta.com",
            "committed_date": "2017-11-06T11:48:04.000-05:00"
        },
        {
            "id": "8f18e0a4a42a4c8f9bec307f2faab4ee6e16f2a6",
            "short_id": "8f18e0a4",
            "title": "feat(B-11212) - allow shipments of plot containers",
            "created_at": "2017-11-07T11:01:40.000-05:00",
            "parent_ids": [
                "c644a0f9debf45dcdbde7aa4f4bf5f7dba8842b8"
            ],
            "message": "feat(B-11212) - allow shipments of plot containers\n",
            "author_name": "t874105",
            "author_email": "michael.resnick@syngenta.com",
            "authored_date": "2017-11-07T11:01:40.000-05:00",
            "committer_name": "t874105",
            "committer_email": "michael.resnick@syngenta.com",
            "committed_date": "2017-11-07T11:01:40.000-05:00"
        },
        {
            "id": "08e96e06e3e47a8dd12fdca443954ce9e5c7ebee",
            "short_id": "08e96e06",
            "title": "Merge branch 'B-08455' into 'master'",
            "created_at": "2017-11-10T10:19:12.000-05:00",
            "parent_ids": [
                "ec62c0c29d278a174dc796b0419e91a5ce04d935",
                "a7b72ec3915d05125f7f8568e24bf7e62a697942"
            ],
            "message": "Merge branch 'B-08455' into 'master'\n\nfeat(B-08455) - don't allow reconcile at different centers on reconcile page\n\nSee merge request mint/material!1328",
            "author_name": "Michael Resnick",
            "author_email": "michael.resnick@syngenta.com",
            "authored_date": "2017-11-10T10:19:12.000-05:00",
            "committer_name": "Michael Resnick",
            "committer_email": "michael.resnick@syngenta.com",
            "committed_date": "2017-11-10T10:19:12.000-05:00"
        },
        {
            "id": "5e20640096facc6fcc8546dc9826bfaa9ebc0f8b",
            "short_id": "5e206400",
            "title": "Merge branch 'B-11211' into 'master'",
            "created_at": "2017-11-10T10:20:05.000-05:00",
            "parent_ids": [
                "08e96e06e3e47a8dd12fdca443954ce9e5c7ebee",
                "c644a0f9debf45dcdbde7aa4f4bf5f7dba8842b8"
            ],
            "message": "Merge branch 'B-11211' into 'master'\n\nfeat(B-11211) - allow sown (plot) containers to be moved to diff locations\n\nSee merge request mint/material!1329",
            "author_name": "Michael Resnick",
            "author_email": "michael.resnick@syngenta.com",
            "authored_date": "2017-11-10T10:20:05.000-05:00",
            "committer_name": "Michael Resnick",
            "committer_email": "michael.resnick@syngenta.com",
            "committed_date": "2017-11-10T10:20:05.000-05:00"
        },
        {
            "id": "2f1224d9a51b229431ff8d7def1c274caf1b57a5",
            "short_id": "2f1224d9",
            "title": "Merge branch 'B-11212' into 'master'",
            "created_at": "2017-11-10T10:20:42.000-05:00",
            "parent_ids": [
                "5e20640096facc6fcc8546dc9826bfaa9ebc0f8b",
                "8f18e0a4a42a4c8f9bec307f2faab4ee6e16f2a6"
            ],
            "message": "Merge branch 'B-11212' into 'master'\n\nfeat(B-11212) - allow shipments of plot containers\n\nSee merge request mint/material!1330",
            "author_name": "Michael Resnick",
            "author_email": "michael.resnick@syngenta.com",
            "authored_date": "2017-11-10T10:20:42.000-05:00",
            "committer_name": "Michael Resnick",
            "committer_email": "michael.resnick@syngenta.com",
            "committed_date": "2017-11-10T10:20:42.000-05:00"
        },
        {
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
        {
            "id": "2cd797b082002030b0f8ff563d0c9f05e3a7a65f",
            "short_id": "2cd797b0",
            "title": "fix(D-05570) - fix websvc user not having proper permissions",
            "created_at": "2017-11-10T14:42:50.000-05:00",
            "parent_ids": [
                "1b33db5434b1bdbc3c440b6679a45668f82f0939"
            ],
            "message": "fix(D-05570) - fix websvc user not having proper permissions\n",
            "author_name": "t874105",
            "author_email": "michael.resnick@syngenta.com",
            "authored_date": "2017-11-10T14:42:50.000-05:00",
            "committer_name": "t874105",
            "committer_email": "michael.resnick@syngenta.com",
            "committed_date": "2017-11-10T14:42:50.000-05:00"
        },
        {
            "id": "f9da8025ce0ff8d745fefee250db609be2bd6def",
            "short_id": "f9da8025",
            "title": "fix(D-05570) - fix websvc user not having proper permissions for TH",
            "created_at": "2017-11-15T14:02:51.000-05:00",
            "parent_ids": [
                "2cd797b082002030b0f8ff563d0c9f05e3a7a65f"
            ],
            "message": "fix(D-05570) - fix websvc user not having proper permissions for TH\n",
            "author_name": "t874105",
            "author_email": "michael.resnick@syngenta.com",
            "authored_date": "2017-11-15T14:02:51.000-05:00",
            "committer_name": "t874105",
            "committer_email": "michael.resnick@syngenta.com",
            "committed_date": "2017-11-15T14:02:51.000-05:00"
        },
        {
            "id": "82f9f6c6d231c38af318e3159fdd11efac3b473e",
            "short_id": "82f9f6c6",
            "title": "Merge branch 'D-05570' into 'master'",
            "created_at": "2017-11-15T14:05:23.000-05:00",
            "parent_ids": [
                "1b33db5434b1bdbc3c440b6679a45668f82f0939",
                "f9da8025ce0ff8d745fefee250db609be2bd6def"
            ],
            "message": "Merge branch 'D-05570' into 'master'\n\nD 05570\n\nSee merge request mint/material!1335",
            "author_name": "Michael Resnick",
            "author_email": "michael.resnick@syngenta.com",
            "authored_date": "2017-11-15T14:05:23.000-05:00",
            "committer_name": "Michael Resnick",
            "committer_email": "michael.resnick@syngenta.com",
            "committed_date": "2017-11-15T14:05:23.000-05:00"
        }
    ],
    "diffs": [
        {
            "old_path": "material-history-impl/src/main/java/com/syngenta/mint/material/service/history/impl/TransactionHistoryServiceImpl.java",
            "new_path": "material-history-impl/src/main/java/com/syngenta/mint/material/service/history/impl/TransactionHistoryServiceImpl.java",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-history-impl/src/main/java/com/syngenta/mint/material/service/history/impl/TransactionHistoryServiceImpl.java\n+++ b/material-history-impl/src/main/java/com/syngenta/mint/material/service/history/impl/TransactionHistoryServiceImpl.java\n@@ -1424,7 +1424,7 @@ public class TransactionHistoryServiceImpl implements TransactionHistoryService \n         else {\n             //get the user and authenticate them\n             User user = userService.getUser(userId);\n-            if (user == null) {\n+            if (user == null || \"WEBSVC\".equalsIgnoreCase(user.getId())) {\n                 setCurrentUserAsWebService();\n             } else {\n                 userService.setServiceUser(user);\n"
        },
        {
            "old_path": "material-model/src/main/java/com/syngenta/mint/material/model/PhysicalMaterial.java",
            "new_path": "material-model/src/main/java/com/syngenta/mint/material/model/PhysicalMaterial.java",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-model/src/main/java/com/syngenta/mint/material/model/PhysicalMaterial.java\n+++ b/material-model/src/main/java/com/syngenta/mint/material/model/PhysicalMaterial.java\n@@ -473,6 +473,10 @@ public class PhysicalMaterial extends AbstractModel {\n         return this.status == PhysicalMaterialStatus.DV;\r\n     }\r\n \r\n+    public boolean isSown() {\r\n+        return this.status == PhysicalMaterialStatus.SW;\r\n+    }\r\n+\r\n     /**\r\n      * Return true if this PM is in a discardable status. A material is discardable if it is in \"Available\",\r\n      * \"Strict Quarantine\", \"Devitalized\" or \"Marked for Elimination\"\r\n"
        },
        {
            "old_path": "material-model/src/main/java/com/syngenta/mint/material/model/ReconcileRow.java",
            "new_path": "material-model/src/main/java/com/syngenta/mint/material/model/ReconcileRow.java",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-model/src/main/java/com/syngenta/mint/material/model/ReconcileRow.java\n+++ b/material-model/src/main/java/com/syngenta/mint/material/model/ReconcileRow.java\n@@ -9,6 +9,7 @@ public class ReconcileRow extends AjaxMessage {\n     //container fields\n     private String altId;\n     private String uuid;\n+    private String centerUuid;\n \n     public PhysicalMaterial getPhysicalMaterial() {\n         return physicalMaterial;\n@@ -33,5 +34,13 @@ public class ReconcileRow extends AjaxMessage {\n     public void setUuid(String uuid) {\n         this.uuid = uuid;\n     }\n+\n+    public String getCenterUuid() {\n+        return centerUuid;\n+    }\n+\n+    public void setCenterUuid(String centerUuid) {\n+        this.centerUuid = centerUuid;\n+    }\n }\n \n"
        },
        {
            "old_path": "material-mybatis/src/main/resources/ContainerSqlMapDao.xml",
            "new_path": "material-mybatis/src/main/resources/ContainerSqlMapDao.xml",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-mybatis/src/main/resources/ContainerSqlMapDao.xml\n+++ b/material-mybatis/src/main/resources/ContainerSqlMapDao.xml\n@@ -545,9 +545,11 @@\n         CONNECT BY PRIOR container_uuid = container_parent_uuid)\r\n     </select>\r\n \r\n+    <!-- sown plots are always WIP so don't bother to count them -->\r\n     <select id=\"getAllPhysicalMaterialWips\" parameterType=\"string\" resultType=\"boolean\">\r\n-        SELECT PHYSICAL_MAT_WIP_FLAG FROM mm_physical_material\r\n-        WHERE physical_mat_cont_uuid IN (\r\n+        SELECT PHYSICAL_MAT_WIP_FLAG FROM mm_physical_material pm\r\n+        WHERE  pm.physical_mat_status_cd &lt;&gt; 'SW'\r\n+        and pm.physical_mat_cont_uuid IN (\r\n         SELECT container_uuid FROM mm_container START WITH container_uuid = #{value}\r\n         CONNECT BY PRIOR container_uuid = container_parent_uuid)\r\n     </select>\r\n"
        },
        {
            "old_path": "material-operation-impl/src/main/java/com/syngenta/mint/material/service/operation/impl/ChangeLocationBulkOperationServiceImpl.java",
            "new_path": "material-operation-impl/src/main/java/com/syngenta/mint/material/service/operation/impl/ChangeLocationBulkOperationServiceImpl.java",
            "a_mode": "100755",
            "b_mode": "100755",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-operation-impl/src/main/java/com/syngenta/mint/material/service/operation/impl/ChangeLocationBulkOperationServiceImpl.java\n+++ b/material-operation-impl/src/main/java/com/syngenta/mint/material/service/operation/impl/ChangeLocationBulkOperationServiceImpl.java\n@@ -92,8 +92,9 @@ public class ChangeLocationBulkOperationServiceImpl implements ChangeLocationBul\n                     valid = false;\r\n                 }\r\n                 PhysicalMaterial pm = container.getPhysicalMaterial();\r\n-                // PM must be Available, Marked for Elimination, Discarded or Devitalized\r\n-                if (valid && pm != null && !pm.isAvailable() && !pm.isMarkedForElimination() && !pm.isDiscarded() && !pm.isDevitalized()) {\r\n+                // PM must be Available, Marked for Elimination, Discarded or Devitalized or SOWN\r\n+                if (valid && pm != null && !pm.isAvailable() && !pm.isMarkedForElimination() && !pm.isDiscarded() && !pm.isDevitalized() &&\r\n+                    !pm.isSown()) {\r\n                     invalidContainers.put(containerId, \"containerMaterialNotValid\");\r\n                     valid = false;\r\n                 }\r\n"
        },
        {
            "old_path": "material-operation-impl/src/test/java/com/syngenta/mint/material/service/operation/impl/ChangeLocationBulkOperationServiceImplTest.java",
            "new_path": "material-operation-impl/src/test/java/com/syngenta/mint/material/service/operation/impl/ChangeLocationBulkOperationServiceImplTest.java",
            "a_mode": "100755",
            "b_mode": "100755",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-operation-impl/src/test/java/com/syngenta/mint/material/service/operation/impl/ChangeLocationBulkOperationServiceImplTest.java\n+++ b/material-operation-impl/src/test/java/com/syngenta/mint/material/service/operation/impl/ChangeLocationBulkOperationServiceImplTest.java\n@@ -2,9 +2,12 @@ package com.syngenta.mint.material.service.operation.impl;\n \r\n import com.syngenta.mint.material.exception.MaterialSecurityException;\r\n import com.syngenta.mint.material.model.Container;\r\n+import com.syngenta.mint.material.model.PhysicalMaterial;\r\n import com.syngenta.mint.material.model.TopLevelLocation;\r\n import com.syngenta.mint.material.model.builder.ContainerBuilder;\r\n+import com.syngenta.mint.material.model.builder.PhysicalMaterialBuilder;\r\n import com.syngenta.mint.material.model.builder.TopLevelLocationBuilder;\r\n+import com.syngenta.mint.material.model.enums.PhysicalMaterialStatus;\r\n import com.syngenta.mint.material.model.id.AlternateId;\r\n import com.syngenta.mint.material.model.id.Uuid;\r\n import com.syngenta.mint.material.service.container.ContainerService;\r\n@@ -119,7 +122,8 @@ public class ChangeLocationBulkOperationServiceImplTest {\n         Uuid newLocationUuid = newUuid();\r\n         when(locationService.idToUuid(newLocationUuid)).thenReturn(newLocationUuid);\r\n \r\n-        Container cont1 = new ContainerBuilder().withUuid().withAlternateId(\"CNALT1\").withLocationUuid(newUuid()).build();\r\n+        PhysicalMaterial pm = new PhysicalMaterialBuilder().withStatus(PhysicalMaterialStatus.SW).build(); //sown status location is editable\r\n+        Container cont1 = new ContainerBuilder().withUuid().withAlternateId(\"CNALT1\").withLocationUuid(newUuid()).withPhysicalMaterial(pm).build();\r\n         Container cont2 = new ContainerBuilder().withUuid().withAlternateId(\"CNALT2\").withLocationUuid(newUuid()).build();\r\n         List<AlternateId> containerIds = new ArrayList<>();\r\n         containerIds.add(cont1.getAlternateId());\r\n"
        },
        {
            "old_path": "material-shipping-impl/src/main/java/com/syngenta/mint/material/service/shipping/impl/ShippingServiceImpl.java",
            "new_path": "material-shipping-impl/src/main/java/com/syngenta/mint/material/service/shipping/impl/ShippingServiceImpl.java",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-shipping-impl/src/main/java/com/syngenta/mint/material/service/shipping/impl/ShippingServiceImpl.java\n+++ b/material-shipping-impl/src/main/java/com/syngenta/mint/material/service/shipping/impl/ShippingServiceImpl.java\n@@ -217,12 +217,18 @@ public class ShippingServiceImpl implements ShippingService {\n                 return result;\r\n             }\r\n         }\r\n+\r\n+\r\n+\r\n         if(container.getLocationUuid() != null) {\r\n             Location cnLoc = locationService.getLocation(container.getLocationUuid());\r\n             if(locationService.locationIsField(cnLoc)) {\r\n-                result.setUnshippableReason(\"Container is in a field\");\r\n-                result.setUnshippableCondition(UnshippableCondition.UNSHIPPABLE_CONTAINER);\r\n-                return result;\r\n+                PhysicalMaterial cpm = container.getPhysicalMaterial();\r\n+                if(cpm == null || !cpm.isSown()) { //only sown PMs (in a plot) can be shipped from a field\r\n+                    result.setUnshippableReason(\"Container is in a field\");\r\n+                    result.setUnshippableCondition(UnshippableCondition.UNSHIPPABLE_CONTAINER);\r\n+                    return result;\r\n+                }\r\n             }\r\n         }\r\n \r\n@@ -246,8 +252,7 @@ public class ShippingServiceImpl implements ShippingService {\n             }\r\n         }\r\n         // no containers stopped from shipping, check the PM statuses\r\n-        List<Boolean> wips = containerService\r\n-                .getAllPhysicalMaterialWips(container.getUuid());\r\n+        List<Boolean> wips = containerService.getAllPhysicalMaterialWips(container.getUuid());\r\n         if (wips.contains(Boolean.TRUE)) {\r\n             LOGGER.debug(\"Found WIP flag in container, cannot ship\");\r\n             result.setShippable(false);\r\n@@ -262,21 +267,17 @@ public class ShippingServiceImpl implements ShippingService {\n                 // these statuses cannot be shipped\r\n                 if (pmStatus == PhysicalMaterialStatus.ME // marked for\r\n                         // elimination\r\n-                        || pmStatus == PhysicalMaterialStatus.SQ // strict\r\n-                        // quarantine\r\n+                        || pmStatus == PhysicalMaterialStatus.SQ // strict quarantine\r\n                         // consumed used to prevent shipping, but now we\r\n                         // allow shipping of inactive containers so it is\r\n                         // removed from the list\r\n                         || pmStatus == PhysicalMaterialStatus.LT // lost\r\n                         || pmStatus == PhysicalMaterialStatus.UI // Unknown Identity\r\n                         || pmStatus == PhysicalMaterialStatus.DT // destroyed\r\n-                        || pmStatus == PhysicalMaterialStatus.OT // ownership\r\n-                    // transferred\r\n+                        || pmStatus == PhysicalMaterialStatus.OT // ownership // transferred\r\n                         ) {\r\n                     // one is enough to make it not shippable\r\n-                    LOGGER.warn(\r\n-                            \"Found a unshippable physical material status {} on physical material\",\r\n-                            pmStatus);\r\n+                    LOGGER.warn(\"Found a unshippable physical material status {} on physical material\", pmStatus);\r\n                     result.setUnshippableReason(\"Found a unshippable physical material status '\" + pmStatus + \"' on physical material\");\r\n                     result.setUnshippableCondition(UnshippableCondition.UNSHIPPABLE_PM);\r\n                     result.setUnshippablePhysicalMaterialStatus(pmStatus);\r\n@@ -1823,12 +1824,45 @@ public class ShippingServiceImpl implements ShippingService {\n         if(container == null) {\r\n             return \"error.invalid.result.container.not.found\";\r\n         }\r\n+\r\n+        boolean hasPlotContainers = false;\r\n+        boolean hasOtherContainers = false;\r\n         for(Container c : shipment.getAllContainers()) {\r\n+\r\n             if(c.getAlternateId().equals(container.getAlternateId())) {\r\n                 return \"error.containerAlreadyInShipment\";\r\n             }\r\n+\r\n+            hasOtherContainers = true;\r\n+\r\n+            if(!hasPlotContainers) {\r\n+                //check if this is a plot Container - it is if its sown and is in a field\r\n+                if (c.getPhysicalMaterial() != null && c.getPhysicalMaterial().isSown()) {\r\n+                    Location loc = locationService.getLocation(c.getLocationUuid());\r\n+                    if (loc != null) {\r\n+                        if (locationService.locationIsField(loc)) {\r\n+                            hasPlotContainers = true;\r\n+                        }\r\n+                    }\r\n+                }\r\n+            }\r\n         }\r\n \r\n+        boolean plotContainer = false;\r\n+        if (container.getPhysicalMaterial() != null && container.getPhysicalMaterial().isSown()) {\r\n+            Location loc = locationService.getLocation(container.getLocationUuid());\r\n+            if (loc != null) {\r\n+                if (locationService.locationIsField(loc)) {\r\n+                    plotContainer = true;\r\n+                }\r\n+            }\r\n+        }\r\n+\r\n+        if(hasOtherContainers && plotContainer != hasPlotContainers) { //can't mix plot with non-plot containers in a shipment\r\n+            return \"error.plotContainers\";\r\n+        }\r\n+\r\n+\r\n         AlternateId containerAltId = container.getAlternateId();\r\n         if (containerAltId != null) {\r\n             Container firstContainer = shipment.getAllContainers().size() > 0 ? shipment.getAllContainers().get(0) : null;\r\n"
        },
        {
            "old_path": "material-shipping-impl/src/test/java/com/syngenta/mint/material/service/shipping/ShippingServiceImplTest.java",
            "new_path": "material-shipping-impl/src/test/java/com/syngenta/mint/material/service/shipping/ShippingServiceImplTest.java",
            "a_mode": "100755",
            "b_mode": "100755",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-shipping-impl/src/test/java/com/syngenta/mint/material/service/shipping/ShippingServiceImplTest.java\n+++ b/material-shipping-impl/src/test/java/com/syngenta/mint/material/service/shipping/ShippingServiceImplTest.java\n@@ -427,4 +427,44 @@ public class ShippingServiceImplTest {\n         verify(transactionHistoryService, times(4)).logChangeLocationEvent(any(Container.class), eq(true), eq(\"tis reasonante\"));\r\n     }\r\n \r\n+\r\n+    @Test\r\n+    public void testValidateContainer() throws Exception {\r\n+        Shipment shipment = new ShipmentBuilder().withUuid().build();\r\n+        ShipmentParcel aParcel = new ShipmentParcel();\r\n+        shipment.getParcels().add(aParcel);\r\n+        PhysicalMaterial pm = new PhysicalMaterialBuilder().withStatus(PhysicalMaterialStatus.AV).build();\r\n+        Container container = new ContainerBuilder().withUuid().withAlternateId(AlternateId.of(\"CNA\")).withStatus(ContainerStatus.A).\r\n+            withLocationUuid(Uuid.of(\"LOC-UUID\")).withPhysicalMaterial(pm).build();\r\n+//        aParcel.getContainers().add(container);\r\n+\r\n+        when(containerService.getContainer(container.getAlternateId())).thenReturn(container);\r\n+\r\n+        List<PhysicalMaterialStatus> pmStatuses = new ArrayList<>();\r\n+        when(containerService.getAllPhysicalMaterialStatuses(container.getUuid())).thenReturn(pmStatuses);\r\n+\r\n+        pmStatuses.add(PhysicalMaterialStatus.AV); //active is ok\r\n+        String response = svc.validateContainer(shipment, container);\r\n+        assertNull(response);\r\n+\r\n+\r\n+        pmStatuses.add(PhysicalMaterialStatus.DT); //destroyed is not ok\r\n+        response = svc.validateContainer(shipment, container);\r\n+        assertNotNull(response);\r\n+\r\n+        pmStatuses.clear();\r\n+        pmStatuses.add(PhysicalMaterialStatus.SW); //sown is okay\r\n+        response = svc.validateContainer(shipment, container);\r\n+        assertNull(response);\r\n+\r\n+        List<Boolean> wips = new ArrayList<>();\r\n+        wips.add(true);\r\n+        when(containerService.getAllPhysicalMaterialWips(container.getUuid())).thenReturn(wips);\r\n+\r\n+        //WIPs are not okay\r\n+        response = svc.validateContainer(shipment, container);\r\n+        assertNotNull(response);\r\n+\r\n+    }\r\n+\r\n }\r\n"
        },
        {
            "old_path": "material-user-impl/src/main/java/com/syngenta/mint/material/service/user/impl/UserServiceImpl.java",
            "new_path": "material-user-impl/src/main/java/com/syngenta/mint/material/service/user/impl/UserServiceImpl.java",
            "a_mode": "100755",
            "b_mode": "100755",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-user-impl/src/main/java/com/syngenta/mint/material/service/user/impl/UserServiceImpl.java\n+++ b/material-user-impl/src/main/java/com/syngenta/mint/material/service/user/impl/UserServiceImpl.java\n@@ -37,6 +37,10 @@ public class UserServiceImpl implements UserService {\n \r\n     private SecurityService securityService;\r\n \r\n+    private User webServiceUser;\r\n+\r\n+    public static final String WEB_SVC_USER = \"WEBSVC\";\r\n+\r\n     @Override\r\n     public void setServiceUser(User user) {\r\n         ArrayList authorities = new ArrayList();\r\n@@ -46,6 +50,10 @@ public class UserServiceImpl implements UserService {\n         final String key = new Random().nextInt() + \"\";\r\n         Authentication auth = new AnonymousAuthenticationToken(key, userDetails, userDetails.getAuthorities());\r\n         SecurityContextHolder.getContext().setAuthentication(auth);\r\n+\r\n+        if(WEB_SVC_USER.equalsIgnoreCase(user.getId())) { //cache the websvc user object with all its permissions\r\n+            webServiceUser = user;\r\n+        }\r\n     }\r\n \r\n     @Override\r\n@@ -83,7 +91,14 @@ public class UserServiceImpl implements UserService {\n      */\r\n     @Override\r\n     public User getCurrentUser() {\r\n-        User currentUser = getUser(getCurrentUsernameFromSecurityContext());\r\n+        String userName = getCurrentUsernameFromSecurityContext();\r\n+\r\n+        //don't pull websvc user from DB since the permissions were all defined in code\r\n+        if(userName != null && WEB_SVC_USER.equalsIgnoreCase(userName) && webServiceUser != null) {\r\n+            return webServiceUser;\r\n+        }\r\n+\r\n+        User currentUser = getUser(userName);\r\n         return currentUser;\r\n     }\r\n \r\n"
        },
        {
            "old_path": "material-webapp/src/main/java/com/syngenta/mint/material/controller/ReconcileController.java",
            "new_path": "material-webapp/src/main/java/com/syngenta/mint/material/controller/ReconcileController.java",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-webapp/src/main/java/com/syngenta/mint/material/controller/ReconcileController.java\n+++ b/material-webapp/src/main/java/com/syngenta/mint/material/controller/ReconcileController.java\n@@ -122,6 +122,11 @@ public class ReconcileController extends BaseController {\n             PhysicalMaterial pm = new PhysicalMaterial(container.getPhysicalMaterial());\n             row.setPhysicalMaterial(pm);\n \n+            if(container.getLocationUuid() != null) {\n+                TopLevelLocation center = locationService.getTopLevelLocationByLocation(container.getLocationUuid());\n+                row.setCenterUuid(center.getUuid().toString());\n+            }\n+\n         } catch (MaterialSecurityException e) {\n             LOGGER.error(\"Permission denied getting container\", e);\n             row.setError(\"Permission denied getting container\");\n"
        },
        {
            "old_path": "material-webapp/src/main/java/com/syngenta/mint/material/utils/ContainerProperties.java",
            "new_path": "material-webapp/src/main/java/com/syngenta/mint/material/utils/ContainerProperties.java",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-webapp/src/main/java/com/syngenta/mint/material/utils/ContainerProperties.java\n+++ b/material-webapp/src/main/java/com/syngenta/mint/material/utils/ContainerProperties.java\n@@ -330,7 +330,6 @@ public class ContainerProperties {\n         boolean pmStatusAllowsLocationEdit = true;\n         //don't allow editing location if PM is:\n         if (pm != null &&  (pm.getStatus().equals(PhysicalMaterialStatus.UI) ||\n-            pm.getStatus().equals(PhysicalMaterialStatus.SW) ||\n             pm.getStatus().equals(PhysicalMaterialStatus.TV) ||\n             pm.getStatus().equals(PhysicalMaterialStatus.LT) ||\n             pm.getStatus().equals(PhysicalMaterialStatus.SQ) ||\n"
        },
        {
            "old_path": "material-webapp/src/main/java/com/syngenta/mint/material/utils/ControllerUtils.java",
            "new_path": "material-webapp/src/main/java/com/syngenta/mint/material/utils/ControllerUtils.java",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-webapp/src/main/java/com/syngenta/mint/material/utils/ControllerUtils.java\n+++ b/material-webapp/src/main/java/com/syngenta/mint/material/utils/ControllerUtils.java\n@@ -209,7 +209,7 @@ public class ControllerUtils {\n      * This is a nasty hack.  User credentials should be passed into the service call or fetched from the db.\n      * @param userService\n      */\n-    public static void setCurrentUserAsWebService(UserService userService){\n+    public static User setCurrentUserAsWebService(UserService userService){\n         UserSecurity sec = new UserSecurity();\n         List<ApplicationRole> appRoles;\n         appRoles = new ArrayList<>();\n@@ -283,6 +283,7 @@ public class ControllerUtils {\n         user.setId(\"WEBSVC\");\n         user.setSecurity(sec);\n         userService.setServiceUser(user);\n+        return user;\n     }\n \n     public static Map<String,String> getCarrierTypes() {\n"
        },
        {
            "old_path": "material-webapp/src/main/resources/messages.properties",
            "new_path": "material-webapp/src/main/resources/messages.properties",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-webapp/src/main/resources/messages.properties\n+++ b/material-webapp/src/main/resources/messages.properties\n@@ -403,6 +403,7 @@ warning.thirdPartyAddress=The intended shipment address is a Syngenta address, b\n error.containerAlreadyInShipment=The container is already on this shipment\n error.containersNotCoLocated=Cannot add the container because it is not in the same location as the other containers\n container.alreadyshipping=Container is already shipping\n+error.plotContainers=Cannot ship plot containers with non-plot containers\n container.nested=Container is nested in another container and cannot be shipped independently\n container.unshippable.R=A reserved container cannot be shipped\n container.unshippable.D=A discarded container cannot be shipped\n"
        },
        {
            "old_path": "material-webapp/src/main/webapp/WEB-INF/ftl/location/viewCenterDetails.ftl",
            "new_path": "material-webapp/src/main/webapp/WEB-INF/ftl/location/viewCenterDetails.ftl",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-webapp/src/main/webapp/WEB-INF/ftl/location/viewCenterDetails.ftl\n+++ b/material-webapp/src/main/webapp/WEB-INF/ftl/location/viewCenterDetails.ftl\n@@ -62,9 +62,5 @@\n             <span class=\"col_3\">[@spring.message \"owner\"/]</span>\r\n             <span class=\"col_9\">${locationForm.topLevelLocation.owner.displayValue}</span>\r\n         </div>\r\n-        <div class=\"row\">\r\n-            <span class=\"col_3\">[@spring.message \"custodian\"/]</span>\r\n-            <span class=\"col_9\">${(locationForm.topLevelLocation.custodian.displayValue)!}</span>\r\n-        </div>\r\n     </div>\r\n </div>\n\\ No newline at end of file\n"
        },
        {
            "old_path": "material-webapp/src/main/webapp/WEB-INF/ftl/location/viewSiteDetails.ftl",
            "new_path": "material-webapp/src/main/webapp/WEB-INF/ftl/location/viewSiteDetails.ftl",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-webapp/src/main/webapp/WEB-INF/ftl/location/viewSiteDetails.ftl\n+++ b/material-webapp/src/main/webapp/WEB-INF/ftl/location/viewSiteDetails.ftl\n@@ -44,8 +44,8 @@\n             <span class=\"col_9\">${locationForm.site.typeCode.description}</span>\r\n         </div>\r\n         <div class=\"row\">\r\n-            <span class=\"col_3\">[@spring.message \"custodian\"/]</span>\r\n-            <span class=\"col_9\">${(locationForm.site.custodian)! \"Unknown\"}</span>\r\n+            <span class=\"col_3\">[@spring.message \"owner\"/]</span>\r\n+            <span class=\"col_9\">${(locationForm.site.owner)! \"Unknown\"}</span>\r\n         </div>\r\n         <div class=\"row\">\r\n             <span class=\"col_3\">[@spring.message \"refSite\"/]</span>\r\n"
        },
        {
            "old_path": "material-webapp/src/main/webapp/WEB-INF/ftl/rr/reconcile.ftl",
            "new_path": "material-webapp/src/main/webapp/WEB-INF/ftl/rr/reconcile.ftl",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-webapp/src/main/webapp/WEB-INF/ftl/rr/reconcile.ftl\n+++ b/material-webapp/src/main/webapp/WEB-INF/ftl/rr/reconcile.ftl\n@@ -89,6 +89,8 @@\n     var idList = []; //list of container alt ids-uuid key value pairs\n     var uuidList = []; //list of uuids\n \n+    var CENTER_UUID; // the common center uuid, as containers are added, they must all be in the same center uuid per B-08455\n+\n     function scanContainer(containerId, isOnPageLoad) {\n         //first check to see if this container has already been scanned\n         if(!containerId) {\n@@ -133,21 +135,38 @@\n                     ERRORS.push(data.error);\n                 }\n                 else {\n-                    if(data.info) {\n-                        INFOS.push(data.info);\n+                    var addRow = true;\n+                    //container center uuid must all be the same\n+                    if(data.centerUuid) {\n+                        if(!CENTER_UUID) {\n+                            CENTER_UUID = data.centerUuid;\n+                        }\n+                        else {\n+                            if(CENTER_UUID != data.centerUuid) {\n+                                ERRORS.push(\"Container \" + data.altId + \" must be in the same center as the other containers\");\n+                                addRow = false;\n+                            }\n+                        }\n                     }\n \n-                    idList[data.altId] = data.uuid;\n-                    uuidList[data.uuid] = data.altId;\n+                    if(addRow) {\n \n-                    if(Object.keys(idList).length == 1) {\n-                        $(\"#buttons\").show();\n-                        $(\"#output\").show();\n-                    }\n+                        if (data.info) {\n+                            INFOS.push(data.info);\n+                        }\n+\n+                        idList[data.altId] = data.uuid;\n+                        uuidList[data.uuid] = data.altId;\n \n-                    insertRow(data, isOnPageLoad);\n+                        if (Object.keys(idList).length == 1) {\n+                            $(\"#buttons\").show();\n+                            $(\"#output\").show();\n+                        }\n \n-                    if(!isOnPageLoad) highlightRow(data.altId);\n+                        insertRow(data, isOnPageLoad);\n+\n+                        if (!isOnPageLoad) highlightRow(data.altId);\n+                    }\n                 }\n \n             },\n@@ -261,9 +280,10 @@\n             delete idList[id];\n             $(\"#\"+id).remove();\n \n-             if(Object.keys(idList).length == 0) {\n+            if(Object.keys(idList).length == 0) {\n                 $(\"#buttons\").hide();\n                 $(\"#output\").hide();\n+                CENTER_UUID = \"\";\n             }\n         }\n \n"
        },
        {
            "old_path": "material-webapp/src/test/java/com/syngenta/mint/material/controller/ContainerDetailsControllerTest.java",
            "new_path": "material-webapp/src/test/java/com/syngenta/mint/material/controller/ContainerDetailsControllerTest.java",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-webapp/src/test/java/com/syngenta/mint/material/controller/ContainerDetailsControllerTest.java\n+++ b/material-webapp/src/test/java/com/syngenta/mint/material/controller/ContainerDetailsControllerTest.java\n@@ -1,9 +1,16 @@\n package com.syngenta.mint.material.controller;\n \n-import com.syngenta.mint.material.model.Trial;\n+import com.syngenta.mint.material.model.*;\n+import com.syngenta.mint.material.model.builder.ContainerBuilder;\n+import com.syngenta.mint.material.model.builder.PhysicalMaterialBuilder;\n+import com.syngenta.mint.material.model.builder.UserBuilder;\n+import com.syngenta.mint.material.model.builder.UserSecurityBuilder;\n+import com.syngenta.mint.material.model.enums.Permission;\n+import com.syngenta.mint.material.model.enums.PhysicalMaterialStatus;\n import com.syngenta.mint.material.model.id.IdFactory;\n import com.syngenta.mint.material.model.id.Uuid;\n import com.syngenta.mint.material.model.sql.PulldownData;\n+import com.syngenta.mint.material.utils.ContainerProperties;\n import org.junit.Assert;\n import org.junit.Test;\n import org.mockito.InjectMocks;\n@@ -11,6 +18,9 @@ import org.mockito.Mockito;\n \n import java.util.Map;\n \n+import static com.syngenta.mint.material.model.id.IdFactory.newUuid;\n+import static org.mockito.Mockito.when;\n+\n /**\n  * Created by t874105 on 6/19/2017.\n  */\n@@ -47,4 +57,23 @@ public class ContainerDetailsControllerTest extends BaseTest  {\n         Assert.assertEquals(result.get(\"isPacket\").getValue(), \"false\");\n         Assert.assertEquals(result.get(\"trial\").getDisplayName(), \"TestTrialID\");\n     }\n+\n+\n+    @Test\n+    public void testContainerProperties() throws Exception {\n+        UserSecurity userSec = new UserSecurityBuilder().withPermission(Permission.FIND_CONTAINERS)\n+            .withPermission(Permission.CREATE_CONTAINERS)\n+            .withPermission(Permission.NEST)\n+            .build();\n+        User user = new UserBuilder().withId(\"testuser\").withSecurity(userSec).build();\n+        when(userService.getCurrentUser()).thenReturn(user);\n+\n+        PhysicalMaterial pm = new PhysicalMaterialBuilder().withStatus(PhysicalMaterialStatus.SW).build(); //sown status location is editable\n+\n+        Container cont1 = new ContainerBuilder().withUuid().withAlternateId(\"CNALT1\").withLocationUuid(newUuid()).withPhysicalMaterial(pm).build();\n+\n+        ContainerProperties props = new ContainerProperties(cont1, shippingService, userService);\n+\n+        Assert.assertTrue(props.isLocationEditable());\n+    }\n }\n\\ No newline at end of file\n"
        },
        {
            "old_path": "material-webapp/src/test/java/com/syngenta/mint/material/controller/ReconcileControllerTest.java",
            "new_path": "material-webapp/src/test/java/com/syngenta/mint/material/controller/ReconcileControllerTest.java",
            "a_mode": "100644",
            "b_mode": "100644",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/material-webapp/src/test/java/com/syngenta/mint/material/controller/ReconcileControllerTest.java\n+++ b/material-webapp/src/test/java/com/syngenta/mint/material/controller/ReconcileControllerTest.java\n@@ -3,6 +3,7 @@ package com.syngenta.mint.material.controller;\n import com.syngenta.mint.material.model.Container;\n import com.syngenta.mint.material.model.PhysicalMaterial;\n import com.syngenta.mint.material.model.ReconcileRow;\n+import com.syngenta.mint.material.model.TopLevelLocation;\n import com.syngenta.mint.material.model.builder.ContainerBuilder;\n import com.syngenta.mint.material.model.builder.PhysicalMaterialBuilder;\n import com.syngenta.mint.material.model.id.AlternateId;\n@@ -30,16 +31,21 @@ public class ReconcileControllerTest extends BaseTest {\n         final Container container = new ContainerBuilder(id.get())\n             .withAlternateId(id)\n             .withUuid(new Uuid(\"test-uuid\"))\n+            .withLocationUuid(\"loc-uuid\")\n             .withPhysicalMaterial(pm).build();\n \n+        TopLevelLocation center = new TopLevelLocation();\n+        center.setUuid(Uuid.of(\"CENTER-UUID\"));\n+\n         when(containerService.getContainer(id)).thenReturn(container);\n         when(shippingService.isOperable(container)).thenReturn(true);\n+        when(locationService.getTopLevelLocationByLocation(container.getLocationUuid())).thenReturn(center);\n \n         ReconcileRow row = controller.scanContainer(id.getValue());\n         PhysicalMaterial resultPm = row.getPhysicalMaterial();\n         Assert.assertNotNull(resultPm);\n         Assert.assertEquals(false, resultPm.isWorkInProgress()); //pm default to wip: false\n-\n+        Assert.assertEquals(\"CENTER-UUID\", row.getCenterUuid()); //center uuid is returned\n \n         pm.setWorkInProgress(true); //overwrite wip flag to true\n         ReconcileRow row2 = controller.scanContainer(id.getValue());\n"
        },
        {
            "old_path": "pom.xml",
            "new_path": "pom.xml",
            "a_mode": "100755",
            "b_mode": "100755",
            "new_file": false,
            "renamed_file": false,
            "deleted_file": false,
            "diff": "--- a/pom.xml\n+++ b/pom.xml\n@@ -31,7 +31,7 @@\n     </profiles>\n \n     <properties>\n-        <app.version>20171103</app.version>\n+        <app.version>20171110</app.version>\n \n         <!-- don't rely on DNS to resolve http://mintartifactory.syngentaaws.org -->\n         <artifactory.name>http://10.127.183.8</artifactory.name>\n"
        }
    ],
    "compare_timeout": false,
    "compare_same_ref": false
}
