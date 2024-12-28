.. _api_Pose:

Pose
====

Inherited: None

.. _api_Pose_description:

Description
-----------



.. _api_Pose_public:

Public Methods
--------------

+-------------------------------+------------------------------------------------+
|                          void | :ref:`addBone<api_Pose_addBone>` (Bone * bone) |
+-------------------------------+------------------------------------------------+
| const :ref:`Bone<api_Bone>` * | :ref:`bone<api_Pose_bone>` (int  index) const  |
+-------------------------------+------------------------------------------------+
|                           int | :ref:`boneCount<api_Pose_boneCount>` () const  |
+-------------------------------+------------------------------------------------+



.. _api_Pose_static:

Static Methods
--------------

None

.. _api_Pose_methods:

Methods Description
-------------------

.. _api_Pose_addBone:

 void **Pose::addBone** (:ref:`Bone<api_Bone>` * *bone*)

Adds a *bone* to the pose.

----

.. _api_Pose_bone:

const :ref:`Bone<api_Bone>` * **Pose::bone** (int  *index*) const

Returns a bone with *index*.


**Note:** Returns nullptr in case no such bone.


----

.. _api_Pose_boneCount:

 int **Pose::boneCount** () const

Returns the count of bones for the current pose which was affected.


