.. _api_AnimationTrack:

AnimationTrack
==============

Inherited: None

.. _api_AnimationTrack_description:

Description
-----------



.. _api_AnimationTrack_public:

Public Methods
--------------

+--------------+----------------------------------------------------------------------------------+
|          int | :ref:`duration<api_AnimationTrack_duration>` () const                            |
+--------------+----------------------------------------------------------------------------------+
|         void | :ref:`fixCurves<api_AnimationTrack_fixCurves>` ()                                |
+--------------+----------------------------------------------------------------------------------+
|          int | :ref:`hash<api_AnimationTrack_hash>` () const                                    |
+--------------+----------------------------------------------------------------------------------+
|  std::string | :ref:`path<api_AnimationTrack_path>` () const                                    |
+--------------+----------------------------------------------------------------------------------+
|  std::string | :ref:`property<api_AnimationTrack_property>` () const                            |
+--------------+----------------------------------------------------------------------------------+
|         void | :ref:`setDuration<api_AnimationTrack_setDuration>` (int  duration)               |
+--------------+----------------------------------------------------------------------------------+
|         void | :ref:`setPath<api_AnimationTrack_setPath>` (const std::string  path)             |
+--------------+----------------------------------------------------------------------------------+
|         void | :ref:`setProperty<api_AnimationTrack_setProperty>` (const std::string  property) |
+--------------+----------------------------------------------------------------------------------+



.. _api_AnimationTrack_static:

Static Methods
--------------

None

.. _api_AnimationTrack_methods:

Methods Description
-------------------

.. _api_AnimationTrack_duration:

 int **AnimationTrack::duration** () const

Returns a duration of track in milliseconds.

**See also** setDuration().

----

.. _api_AnimationTrack_fixCurves:

 void **AnimationTrack::fixCurves** ()

Tries to fix animation curves in the animation track. Renormalizes existant keyframes and checks the duration.

----

.. _api_AnimationTrack_hash:

 int **AnimationTrack::hash** () const

Returns a hash of path and name for quick access.

----

.. _api_AnimationTrack_path:

 std::string **AnimationTrack::path** () const

Returns a path to the object in the hierarchy.

**See also** setPath().

----

.. _api_AnimationTrack_property:

 std::string **AnimationTrack::property** () const

Returns a property name that will be animated.

**See also** setProperty().

----

.. _api_AnimationTrack_setDuration:

 void **AnimationTrack::setDuration** (int  *duration*)

Sets a *duration* of track in milliseconds.

**See also** *duration*().

----

.. _api_AnimationTrack_setPath:

 void **AnimationTrack::setPath** (std::string  *path*)

Sets a *path* to the object in the hierarchy.

**See also** *path*().

----

.. _api_AnimationTrack_setProperty:

 void **AnimationTrack::setProperty** (std::string  *property*)

Sets a *property* name that will be animated.

**See also** *property*().


