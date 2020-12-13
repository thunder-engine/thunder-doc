.. _api_Pose:
Pose Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_Pose_description:
Description
-----------



.. _api_Pose_public:
Public Methods
--------------

+-------------------------------------+------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`addBone<api_Pose_addBone>` (Bone * bone) |
+-------------------------------------+------------------------------------------------+
| :ref:`const Bone<api_const Bone>` * | :ref:`bone<api_Pose_bone>` (int  index) const  |
+-------------------------------------+------------------------------------------------+
|                 :ref:`int<api_int>` | :ref:`boneCount<api_Pose_boneCount>` () const  |
+-------------------------------------+------------------------------------------------+



.. _api_Pose_static:
Static Methods
--------------

None

.. _api_Pose_methods:
Methods Description
-------------------

.. _api_Pose_addBone:

:ref:`void<api_void>`  **Pose::addBone** (:ref:`Bone<api_Bone>` * *bone*)

Adds a *bone* to the pose.

----

.. _api_Pose_bone:

:ref:`const Bone<api_const Bone>` * **Pose::bone** (:ref:`int<api_int>`  *index*) const

Returns a bone with *index*.

**Note:** Returns nullptr in case no such bone.

----

.. _api_Pose_boneCount:

:ref:`int<api_int>`  **Pose::boneCount** () const

Returns the count of bones for the current pose which was affected.

----


